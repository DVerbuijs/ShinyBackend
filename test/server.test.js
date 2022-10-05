let chai = require("chai");
const chaiHttp = require("chai-http");
const { response } = require("express");
let app =require('../index') 


// Assertion Style
chai.should();
chai.use(chaiHttp);


// UNIT test begin

describe("SAMPLE unit test",()=>{
    /**
     * Test Get
     */

    describe("Get /login/login", () =>{
        it("Should get a 200 return", (done)=>{
            chai.request(app)
                .get("/login/login")
                .end((err,response)=>{
                    response.should.have.status(200);
                done();
                });
        });

    });

});



