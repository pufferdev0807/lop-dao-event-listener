const axios = require("axios");
const logger = require("../logger");

const ProductApi = {
  ProposalCreated: async function (params) {
    try {
      const owner = params[0];
      const proposalId = params[1];
      const metadata = params[2];

      const url = `https://gf2tbjvl4f.execute-api.us-east-1.amazonaws.com/lop-event-processor/lop-product-proposal?proposalIndex=${proposalId}&proposer=${owner}&metadata=${metadata}`;

      await axios({
        method: "POST",
        url: url,
        headers: { "Content-Type": "application/json; charset=utf-8" },
      });

      logger.info("ProductApi Proposal Created", params);
    } catch (e) {
      logger.error("ProductApi Proposal Created Error", params, e);
    }
  },
  VoteYes: async function (params) {
    try {
      const account = params[0];
      const proposalIndex = Number(params[1]);
      let proposalAmount = Number(params[2]);
      proposalAmount = parseFloat(proposalAmount).toLocaleString();
      proposalAmount = proposalAmount.replace(/,/g, "");

      const type = "PRODUCT";
      const approve = "YES";

      const url = `https://gf2tbjvl4f.execute-api.us-east-1.amazonaws.com/lop-event-processor/lop-vote?proposalIndex=${proposalIndex}&account=${account}&type=${type}&approve=${approve}&proposalAmount=${proposalAmount}`;

      await axios({
        method: "POST",
        url: url,
        headers: { "Content-Type": "application/json; charset=utf-8" },
      });

      logger.info("ProductApi VoteYes", params);
    } catch (e) {
      logger.error("ProductApi VoteYes Error", params, e);
    }
  },
  VoteNo: async function (params) {
    try {
      const account = params[0];
      const proposalIndex = Number(params[1]);
      let proposalAmount = Number(params[2]);
      proposalAmount = parseFloat(proposalAmount).toLocaleString();
      proposalAmount = proposalAmount.replace(/,/g, "");
      const type = "PRODUCT";
      const approve = "NO";

      const url = `https://gf2tbjvl4f.execute-api.us-east-1.amazonaws.com/lop-event-processor/lop-vote?proposalIndex=${proposalIndex}&account=${account}&type=${type}&approve=${approve}&proposalAmount=${proposalAmount}`;

      await axios({
        method: "POST",
        url: url,
        headers: { "Content-Type": "application/json; charset=utf-8" },
      });

      logger.info("ProductApi VoteNo", params);
    } catch (e) {
      logger.error("ProductApi VoteNo Error", params, e);
    }
  },
  Activated: async function (params) {
    try {
      const proposalIndex = params[0];
      const type = "PRODUCT";
      const status = "ACTIVE";

      const url = `https://gf2tbjvl4f.execute-api.us-east-1.amazonaws.com/lop-event-processor/lop-set-status?proposalIndex=${proposalIndex}&status=${status}&type=${type}`;

      await axios({
        method: "POST",
        url: url,
        headers: { "Content-Type": "application/json; charset=utf-8" },
      });

      logger.info("ProductApi Activated", params);
    } catch (e) {
      logger.error("ProductApi Activated Error", params, e);
    }
  },
  Cancelled: async function (params) {
    try {
      const proposalIndex = params[0];
      const type = "PRODUCT";
      const status = "CANCELLED";

      const url = `https://gf2tbjvl4f.execute-api.us-east-1.amazonaws.com/lop-event-processor/lop-set-status?proposalIndex=${proposalIndex}&status=${status}&type=${type}`;

      await axios({
        method: "POST",
        url: url,
        headers: { "Content-Type": "application/json; charset=utf-8" },
      });

      logger.info("ProductApi Cancelled", params);
    } catch (e) {
      logger.error("ProductApi Cancelled Error", params, e);
    }
  },
  EvaluateVoteAmount: async function (params) {
    try {
      const staker = params[0];
      const proposalId = params[1];
      const oldStakeAmount = Number(params[2]);
      let newStakeAmount = Number(params[3]);
      newStakeAmount = parseFloat(newStakeAmount).toLocaleString();
      newStakeAmount = newStakeAmount.replace(/,/g, "");
      const type = "PRODUCT";

      const url = `https://gf2tbjvl4f.execute-api.us-east-1.amazonaws.com/lop-event-processor/lop-evaluate?staker=${staker}&proposalId=${proposalId}&newStakeAmount=${newStakeAmount}&type=${type}`;

      await axios({
        method: "POST",
        url: url,
        headers: { "Content-Type": "application/json; charset=utf-8" },
      });

      logger.info("ProductApi EvaluateVoteAmount", params);

    } catch(e){
      logger.error("ProductApi EvaluateVoteAmount Error", params, e);
    }
  }
};

module.exports = ProductApi;
