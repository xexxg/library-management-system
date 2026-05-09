exports.getDashboardMenu = (req, res) => {
  res.json([
    { key: "overview", label: "Overview" },
    { key: "user-manage", label: "User Manage" },
    { key: "librarian-manage", label: "Librarian Manage" },
    { key: "role-permission", label: "Role Permission" },
  ]);
};