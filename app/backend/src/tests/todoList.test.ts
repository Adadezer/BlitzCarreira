import * as sinon from 'sinon';
import chai from 'chai';
import chaiHttp from 'chai-http';
import {describe, it, before, after} from 'mocha';

import { app } from '../app';
import todoModel from '../database/models/todoModel';
import { getTask } from './mock/index';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('TODO LIST', () => {

  let chaiHttpResponse: Response;

  before(async () => {
    sinon.stub(todoModel.prototype, 'getTask').resolves(getTask);
  });

  after(()=>{
    (todoModel.prototype.getTask as sinon.SinonStub).restore();
  })

  it('verifica o retorno positivo da rota get', async () => {
    chaiHttpResponse = await chai.request(app).get('/todo');
      expect(chaiHttpResponse).to.have.status(200);
      expect(chaiHttpResponse.body).to.be.an('Array');
      expect(chaiHttpResponse.body[0]).to.be.keys('id', 'descricao', 'status', 'createdAt');
  });
  
});