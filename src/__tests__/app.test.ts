describe("Hostel Management System", () => {
  it("should pass a basic test", () => {
    expect(1 + 1).toBe(2);
  });

  it("should handle user roles", () => {
    const roles = ["ADMIN", "MANAGER", "STAFF", "STUDENT"];
    expect(roles).toContain("ADMIN");
    expect(roles).toContain("STUDENT");
  });
});
