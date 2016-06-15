import * as chai from "chai";
import deriv = require("deriv");

function tolerance(precision?: number) : number{
  if(precision == null) precision = 7;
  return 0.5 * Math.pow(10, -precision);
}

function almostEqual(a: number,b: number, precision?: number) : boolean {
  return Math.abs(a - b) < tolerance(precision);
}

let expect = chai.expect;
describe("deriv", function(){

  it("is a callable function", function(){
    expect(deriv).to.be.a("function");
  });

  it("evaluates derivatives correclty", function(){
    expect(almostEqual(deriv(function(x){return x*x}, 4, 0.1).res, 8));
    expect(almostEqual(deriv(function(x){return 3*Math.pow(x, 3) + 2*x*x + 8*x + 7}, 2, 0.1).res, 52));
  });

  it("stores result and absolute error", function(){
    expect(deriv(function(x){return x*x}, 4, 0.1)).to.have.property('res');
    expect(deriv(function(x){return x*x}, 4, 0.1)).to.have.property('err');
  });

  it("works with both central and forward method", function(){
    expect(almostEqual(deriv(function(x){return x*x}, 4, 0.1,"forward").res, 8));
    expect(almostEqual(deriv(function(x){return x*x}, 4, 0.1,"central").res, 8));
  });
});
