using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace WebApplication1.Pages
{
    public class AboutModel : PageModel
    {
        public string Message { get; set; }

        public void OnGet()
        {
            Message = "This web application is being developed internally via a technology stack comprised of C#, .NetCore, and the HDB API. "
                + "Contact the developer shown below for additional information. ";
        }
    }
}
