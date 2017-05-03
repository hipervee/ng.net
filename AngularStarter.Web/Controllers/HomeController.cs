using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace AngularStarter.Web.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewBag.Title = "Home Page";

            return View();
        }

        public JsonResult Persons() {
            var list = new List<Person>() {
                new Person() { Name="Me" }
            };

            return Json(list, JsonRequestBehavior.AllowGet);
        }
    }

    public class Person {
        public string Name { get; set; }
    }
}
