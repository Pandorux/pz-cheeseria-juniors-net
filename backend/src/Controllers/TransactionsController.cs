using Microsoft.AspNetCore.Mvc;
using Pz.Cheeseria.Api.Data;
using Pz.Cheeseria.Api.Models;
using System;
using System.Linq;

namespace Pz.Cheeseria.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransactionsController : Controller
    {
        [HttpGet]
        [ProducesResponseType(typeof(Transaction[]), 200)]
        [Route("get")]
        public IActionResult GetTransactions()
        {
            return Ok(TransactionRepository.Transactions);
        }

        [HttpGet]
        [ProducesResponseType(typeof(Transaction), 200)]
        [Route("get/{id}")]
        public IActionResult GetTransaction(int id)
        {
            Transaction trans;

            try
            {
                trans = TransactionRepository.Transactions
                            .FirstOrDefault(t => t.TransactionNo == id);

                if (trans != null)
                {
                    Ok(trans);
                }
                else
                {
                    throw new NullReferenceException($"Transaction {id} does not exist");
                }
            }
            catch(Exception e)
            {
                return BadRequest(e.Message);
            }

            // TODO: VS won't let me compile unless I have this here atm
            return Ok();

        }

        [HttpPost]
        [ProducesResponseType(200)]
        [Route("post")]
        // TODO: Nested Item Array is not being sent through
        public IActionResult PostTransaction([FromBody] Transaction trans)
        {
            trans.TransactionNo = TransactionRepository.Transactions.Count + 1;
            TransactionRepository.Transactions.Add(trans);

            return Ok();
        }
    }
}
