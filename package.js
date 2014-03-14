Package.describe({
  summary: "Only responsive grid"
});

Package.on_use(function (api, where) {
  api.add_files('s2.min.css', ['client']);
});
