using System.Web.Mvc;

namespace WebApplication.Controllers
{
    public class FormsController : Controller
    {
        public ActionResult General()
        {
            return View();
        }
        public ActionResult Advanced()
        {
            return View();
        }
        public ActionResult Editors()
        {
            return View();
        }

        /// <summary>
        /// Returns SeriesSelection View
        /// </summary>
        /// <returns></returns>
        public ActionResult SeriesSelection()
        {
            return View();
        }
    }
}