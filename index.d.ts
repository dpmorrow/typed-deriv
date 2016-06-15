declare function deriv(fun:Function, x:number, h:number, type?:string):deriv.Derivative;
declare namespace deriv {
  interface Derivative {
    res:number;
    err:number;
  }
}
export = deriv;
