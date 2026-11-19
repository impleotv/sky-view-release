const repository = "https://github.com/impleotv/sky-view-release";
const api = "https://api.github.com/repos/impleotv/sky-view-release/releases";
const platforms = [
  [
    "Windows desktop",
    "Windows x64 desktop application and standalone server.",
    "Download installer ZIP",
    (name) => name === "sky-view-win-installer.zip",
  ],
  [
    "Docker Compose",
    "Linux deployment bundle with Compose files and host setup.",
    "Download Compose bundle",
    (name) => name === "sky-view-install.tar.gz",
  ],
  [
    "Debian / APT",
    "Docker Compose deployment packaged for Debian and Ubuntu on x64.",
    "Download .deb",
    (name) => /^sky-view_.*_amd64\.deb$/.test(name),
  ],
  [
    "NVIDIA Jetson",
    "Container image for JetPack 4.6 and L4T 32.6.1.",
    "Image and release details",
    (name) => name === "skyview-update-jetson-jetpack4.6-l4t32.6.1.json",
  ],
];
function element(tag, text, className) {
  const node = document.createElement(tag);
  if (text) node.textContent = text;
  if (className) node.className = className;
  return node;
}
function link(label, url, style) {
  const node = element("a", label, style);
  node.href = url;
  return node;
}
function packageLink(release, platform) {
  const asset = release.assets.find((a) => platform[3](a.name));
  if (!asset) return null;
  const base = repository + "/releases/";
  const tag = encodeURIComponent(release.tag_name);
  return platform === platforms[3]
    ? base + "tag/" + tag
    : base + "download/" + tag + "/" + encodeURIComponent(asset.name);
}
async function render() {
  const releases = [];
  for (let page = 1; ; page++) {
    const res = await fetch(api + "?per_page=100&page=" + page);
    if (!res.ok) throw Error("Release list unavailable");
    const rows = await res.json();
    releases.push(
      ...rows.filter(
        (r) => !r.draft && !r.prerelease && /^v\d+\.\d+\.\d+$/.test(r.tag_name),
      ),
    );
    if (rows.length < 100) break;
  }
  releases.sort((a, b) =>
    b.tag_name.localeCompare(a.tag_name, "en", { numeric: true }),
  );
  document.querySelector("#status").textContent = releases.length
    ? "Latest stable release · " + releases[0].tag_name
    : "No stable releases have been published.";
  for (const p of platforms) {
    const card = element("article");
    card.append(element("h2", p[0]), element("p", p[1]));
    const release = releases.find((r) => packageLink(r, p));
    if (release) {
      card.append(
        element(
          "p",
          release.tag_name +
            " · " +
            new Date(release.published_at).toLocaleDateString(),
          "meta",
        ),
      );
      card.append(link(p[2], packageLink(release, p), "download"));
      if (p === platforms[3])
        card.append(
          element(
            "code",
            "docker pull impleo/sky-view:" +
              release.tag_name.slice(1) +
              "-jetpack4.6-l4t32.6.1",
          ),
        );
    } else card.append(element("p", "No package published.", "meta"));
    document.querySelector("#platforms").append(card);
  }
  const history = document.querySelector("#versions");
  for (const r of releases.slice(1)) {
    const row = element("details");
    row.append(element("summary", r.tag_name));
    row.append(
      link("Release notes", repository + "/releases/tag/" + r.tag_name),
    );
    for (const p of platforms) {
      const url = packageLink(r, p);
      if (url) row.append(link(p[0], url));
    }
    history.append(row);
  }
  document.querySelector("#history").hidden = !history.childElementCount;
}
render().catch(() => {
  document.querySelector("#status").textContent =
    "GitHub release information is temporarily unavailable. Use All GitHub releases below to download SkyView.";
});
