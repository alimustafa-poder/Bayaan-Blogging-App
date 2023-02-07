!function(e,t){for(var r in t)e[r]=t[r]}(exports,function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=12)}([function(e,t){e.exports=require("mongoose")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("dotenv")},function(e,t){e.exports=require("jsonwebtoken")},function(e,t){e.exports=require("validator")},function(e,t){e.exports=require("bcrypt")},function(e,t){e.exports=require("morgan")},function(e,t){e.exports=require("cors")},function(e,t){e.exports=require("multer")},function(e,t){e.exports=require("serverless-http")},function(e,t){e.exports=require("express-rate-limit")},function(e,t){e.exports=require("express-slow-down")},function(e,t,r){"use strict";r.r(t);var n=r(2),o=r.n(n),s=r(1),i=r.n(s),a=r(6),u=r.n(a),c=r(3),d=r.n(c),l=r(4),f=r.n(l),p=r(0),y=r.n(p),m=r(5),g=r.n(m);const b=new(0,y.a.Schema)({email:{type:String,required:!0,unique:!0},password:{type:String,required:!0}});b.statics.signup=async function(e,t){if(!e||!t)throw Error("Email and Password fields can't be empty.");if(!f.a.isEmail(e))throw Error("Email is invalid");if(!f.a.isStrongPassword(t))throw Error("Password is not strong enough.");if(await this.findOne({email:e}))throw Error("Email already in use.");const r=await g.a.hash(t,10);return await this.create({email:e,password:r})},b.statics.login=async function(e,t){if(!e||!t)throw Error("Email and Password fields can't be empty.");const r=await this.findOne({email:e});if(!r)throw Error("Email does not exist.");const n=r.password;if(await g.a.compare(t,n))return r;throw Error("Email or Password is incorrect.")};var j=y.a.model("User",b);o.a.config();var w=async(e,t,r)=>{if(!e.headers.authorization)return t.status(401).json({message:"Auther failed"});const n=e.headers.authorization.split(" ")[1];try{const{_id:t}=d.a.verify(n,process.env.SECRET_KEY);e.user=await j.findOne({_id:t}).select("_id"),r()}catch(e){return t.status(401).json({errorName:e.name,errorMessage:"Authentication failed. Try Logging in Again."})}};const h=new(0,y.a.Schema)({title:{type:String,required:!0},author:{type:String,required:!0},body:{type:String,required:!0},email:{type:String,required:!0}},{timestamps:!0});var v=y.a.model("testApp",h);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){P(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function P(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const E=i.a.Router();E.use(w),E.post("/getAll",async(e,t)=>{const{email:r}=e.body,n=await v.find({email:r}).sort({createdAt:-1});t.status(200).json(n)}),E.get("/:id",async(e,t)=>{const{id:r}=e.params;if(!y.a.Types.ObjectId.isValid(r))return t.status(404).json({error:"There is no such blog in the db.",status:404});const n=await v.findById(r);if(!n)return t.status(404).json({error:"No such workout exists.",status:404});t.status(200).json(n)}),E.post("/",async(e,t,r)=>{const n=e.body;try{const e=await v.create(x({},n));t.status(200).json({test:e,status:"ok"})}catch(e){t.status(404).json({error:e.message})}}),E.delete("/:id",async(e,t)=>{const{id:r}=e.params;if(!y.a.Types.ObjectId.isValid(r))return t.status(404).json({error:"No document to delete."});return await v.findOneAndDelete({_id:r})?t.status(200).json({message:"The object/test was deleted."}):t.status(404).json({error:"No object found to delete."})}),E.patch("/:id",async(e,t)=>{const{id:r}=e.params;if(!y.a.Types.ObjectId.isValid(r))return t.status(404).json({error:"No document to delete."});if(!await v.findOneAndUpdate({_id:r},x({},e.body)))return t.status(404).json({error:"No object found to update."});t.status(200).json({message:"The object/test was updated."})});var S=E;o.a.config();const q=e=>d.a.sign({id:e},process.env.SECRET_KEY,{expiresIn:"1d"}),T=i.a.Router();T.post("/login",async(e,t)=>{const{email:r,password:n}=e.body;try{const e=await j.login(r,n),o=q(e);t.status(200).json({email:r,token:o})}catch(e){t.status(404).json({error:e.message})}}),T.post("/signup",async(e,t)=>{const{email:r,password:n}=e.body;try{const e=await j.signup(r,n),o=q(e);t.status(200).json({email:r,token:o})}catch(e){t.status(404).json({error:e.message})}});var _=T,A=r(7),N=r.n(A),R=r(8),k=r.n(R),I=(r(10),r(11),r(9)),M=r.n(I);o.a.config();const D=i()(),U=k()();D.use(U.array()),D.use(i.a.json()),D.use(u()("dev")),D.use(N()()),D.use("/.netlify/functions/api",_),D.use("/.netlify/functions/api",S),y.a.connect(process.env.MONG_URI).then(e=>{D.listen(process.env.PORT,()=>{console.log("Listening on Port",process.env.PORT)})}).catch(e=>{console.log(e)}),exports.handler=M()(D)}]));