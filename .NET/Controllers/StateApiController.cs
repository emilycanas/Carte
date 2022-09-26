using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Carte.Models.Domain;
using Carte.Services;
using Carte.Web.Controllers;
using Carte.Web.Models.Responses;
using System;
using System.Collections.Generic;

namespace Carte.Web.Api.Controllers
{
    [Route("api/states")]
    [ApiController]
    public class StateApiController : BaseApiController
    {
        private IStateService _service = null;
        private IAuthenticationService<int> _authService = null;
        private ILogger _logger = null;

        public StateApiController(IStateService service,
        ILogger<StateApiController> logger
        , IAuthenticationService<int> authService) : base(logger)
        {
            _service = service;
            _authService = authService;
            _logger = logger;
        }


        [HttpGet]
        public ActionResult<ItemsResponse<State>> GetAllStates()
        {
            int code = 200;
            BaseResponse response = null;

            try
            {
                List<State> statesList = _service.GetAllStates();

                if (statesList == null)
                {
                    code = 404;
                    response = new ErrorResponse("App Resource not found.");
                }
                else
                {
                    response = new ItemsResponse<State> { Items = statesList };
                }
            }
            catch (Exception ex)
            {
                code = 500;
                response = new ErrorResponse(ex.Message);
                base.Logger.LogError(ex.ToString());
            }
            return StatusCode(code, response);
        }

        [HttpGet("codes")]
        public ActionResult<ItemsResponse<BaseState>> GetAllStateCodes()
        {
            int code = 200;
            BaseResponse response = null;

            try
            {
                List<BaseState> statesList = _service.GetAllStateCodes();

                if (statesList == null)
                {
                    code = 404;
                    response = new ErrorResponse("App Resource not found.");
                }
                else
                {
                    response = new ItemsResponse<BaseState> { Items = statesList };
                }
            }
            catch (Exception ex)
            {
                code = 500;
                response = new ErrorResponse(ex.Message);
                base.Logger.LogError(ex.ToString());
            }
            return StatusCode(code, response);
        }

    }
}
