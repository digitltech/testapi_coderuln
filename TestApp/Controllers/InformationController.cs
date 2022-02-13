using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ModelDB;
using TestApp.Model;

namespace TestApp.Controller
{
    [Route("api/[controller]")]
    [ApiController]
    public class InformationController : ControllerBase
    {
        ApprContext db;
        public InformationController(ApprContext context) => db = context;


        [HttpGet]
        public JsonResult GetAll()
        {
            var table = db.ConsInformations.Include(x=>x.ElMeters).Include(x=>x.Consumer).ToList();

            return new JsonResult(table);
        }


        [HttpPost]
        public JsonResult AddConsInfo(ConsInformation info)
        {
            db.ConsInformations.Add(info);
            db.SaveChanges();
            return new JsonResult("Сведения добавлены");
        }


        [HttpPut]
        public JsonResult Edit (ConsInformation info)
        {
            db.ConsInformations.Update(info);
            db.SaveChanges();
            return new JsonResult("Информация обновление");
        }
        [HttpDelete("{id}")]
        public JsonResult Del (int id)
        {
          var info =   db.ConsInformations.FirstOrDefault(x => x.Id == id);
            if (info == null) return new JsonResult("Not Found");
            db.ConsInformations.Remove(info);
            db.SaveChanges();
            return new JsonResult("Информация удалена");

        }
    }





}
