using System;

namespace Pz.Cheeseria.Api.Models
{
    public class TransactionItem
    {
        public Guid TransId { get; set; }
        public Guid TransItemId { get; set; }
        public int CheeseId { get; set; } // FK to Product Sold
        public int ItemNo { get; set; }
        public int Quantity { get; set; }
        public int Price { get; set; }
        public int Total { get; set; }
    }
}
