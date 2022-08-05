using System.Collections.Generic;
using Pz.Cheeseria.Api.Models;

namespace Pz.Cheeseria.Api.Data
{
    public class TransactionRepository
    {
        // NOTE: Using this as a 'Database' for this exercise
        // TODO: Change this to a SQLLite Instance or something similar if I have time
        public static List<Transaction> Transactions = new List<Transaction>();
    }
}
