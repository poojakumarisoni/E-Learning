const main = require("./routes/admin/main");
const auth = require("./routes/admin/auth");
const dashboard = require("./routes/admin/dashboard");
const user = require("./routes/admin/user");
const aboutus = require("./routes/admin/aboutus");
const faq = require("./routes/admin/faq");
const privacypolicy = require("./routes/admin/privacypolicy");
const termscondition = require("./routes/admin/termscondition");
const contact = require("./routes/admin/contact");
const job = require("./routes/admin/job");
const course = require("./routes/admin/course");
const university = require("./routes/admin/university");
const college = require("./routes/admin/college");
const mentorship = require("./routes/admin/mentorship");
const feed = require("./routes/admin/feed");
const branch = require("./routes/admin/branch");
const subscription = require("./routes/admin/subscription");
const coupon = require("./routes/admin/coupon");
const order = require("./routes/admin/order");
const manager = require("./routes/admin/manager");
const content = require("./routes/admin/content");
const quiz = require("./routes/admin/quiz");

const AdminRoutes = (app) => {
  app.use("/", main);
  app.use("/admin", auth);
  app.use("/admin", dashboard);
  app.use("/admin/user", user);
  app.use("/admin", aboutus);
  app.use("/admin", faq);
  app.use("/admin", privacypolicy);
  app.use("/admin", termscondition);
  app.use("/admin/contact", contact);
  app.use("/admin/job", job);
  app.use("/admin/course", course);
  app.use("/admin/university", university);
  app.use("/admin/college", college);
  app.use("/admin/mentorship", mentorship);
  app.use("/admin/feed", feed);
  app.use("/admin/branch", branch);
  app.use("/admin/subscription", subscription);
  app.use("/admin/coupon", coupon);
  app.use("/admin/order", order);
  app.use("/admin/manager", manager);
  app.use("/admin/content", content);
  app.use("/admin/quiz", quiz);
};

module.exports = AdminRoutes;
