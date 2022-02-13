using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ModelDB
{
    public interface IConsumerServices
    {
        List<ConsInformation> GetConsumers();
        ConsInformation GetConsumer(int id);
        ConsInformation NewConsumer (ConsInformation consInformation);
        void DeleteConsumer (int id);
        ConsInformation UpdateConsumer (ConsInformation consInformation);
    }
}
