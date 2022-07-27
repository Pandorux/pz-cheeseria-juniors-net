using System;
using System.Collections.Generic;

namespace Pz.Cheeseria.Api.Models
{
    public class Transaction
    {
        public int TransactionNo { get; set; } // Public Facing Number
        public string TransType { get; set; } // I.e Purchase, Sale, Refund
        public DateTime TransDateTime { get; set; }
        public int TotalItemQuantity { get; set; }
        public decimal TotalAmount { get; set; }
        public TransItem[] Items;
    }
}
