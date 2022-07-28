using System;

namespace Pz.Cheeseria.Api.Models
{
    public class TransItem
    {
        public int ItemNo { get; set; } // Identity
        public int CheeseId { get; set; } // FK to Product Sold
        public int Quantity { get; set; }
        public decimal Price { get; set; }
        public decimal Total { get; set; }
    }
}
