using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;


namespace TestApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ElMetricController : ControllerBase
    {
       private readonly ApprContext _context;

        public ElMetricController(ApprContext db) => _context = db;

        [HttpGet]
        //[Route("get_all_metric")]

        public JsonResult Get()
        {
            var metric = _context.ElMeterses.Include(x=>x.typeMeters).ToArray();
            return new JsonResult(metric);
        }
        //public async Task<IActionResult> Getall()
        //{
        //    var metric = await _context.ElMeterses.Include(x => x.typeMeters).ToListAsync();
        //    return Ok(metric);
        //}

      

        [HttpPost]
        [Route("new_metric")]
        public JsonResult Post (ElMeters meters)

        {

            meters.CheckDate = DateTime.Now.AddYears(5);
            _context.ElMeterses.Add(meters);

         _context.SaveChanges();

            return new JsonResult("Информация добавлена");
            

        }

        [HttpDelete("{id}")]
        public JsonResult Del(int id)
        {
            var info = _context.ElMeterses.FirstOrDefault(x => x.id == id);

            if (info == null) return new JsonResult("не найдено");

            _context.ElMeterses.Remove(info);

            _context.SaveChanges();

            return new JsonResult("Информация удаленв");
        }

    }
}
