using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;


//добавления показаний по счетчикам
namespace TestApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ListInformationController : ControllerBase

    {
        private readonly ApprContext _context;

        public ListInformationController (ApprContext db) => _context= db;

        [HttpGet]
        [Route("Get_all")]
        public JsonResult GetAll()
        {
            var table = _context.ListInformations.Include(x=>x.elMeters).ToList();
            return new JsonResult(table);
        }
   

        [HttpPost]
        [Route("new_inform")]
        public JsonResult AddInfo(ListInformation info)

        {
            _context.ListInformations.Add(info);

            _context.SaveChanges();

            return new JsonResult("Показания добавлены");
        }
    }
}
