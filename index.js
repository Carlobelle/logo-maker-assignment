const{ Circle,Square,Triangle}=require("./lib/shapes")
const inquirer=require ("inquirer")
const fs =require("fs")
const questions =[{
    type:"input",
    message:"what is your text?",
    name:"text"},

   {type:"input",
    message:"what is your textColor?",
    name:"textColor"},

   { type:"input",
    message:"what is your shapeColor?",
    name:"shapeColor"},
    {type:"input",
      message:"what is your shape?",
      name:"shape",

}
]
inquirer.prompt (questions).then (answerObject=>{
    console.log (answerObject)
    if (answerObject.shape==="circle"){
        const circle=new Circle(answerObject.text,answerObject.textColor,answerObject.shapeColor)
        console.log (circle)
       return fs.writeFileSync("./examples/logo.svg",circle.render())
    } 
    if (answerObject.shape==="square"){
        const square=new Square(answerObject.text,answerObject.textColor,answerObject.shapeColor)
        console.log (square)
       return fs.writeFileSync("./examples/logo.svg",square.render())
    
    }
    if (answerObject.shape==="triangle"){
        const triangle=new Triangle(answerObject.text,answerObject.textColor,answerObject.shapeColor)
      console.log (triangle)
        return fs.writeFileSync("./examples/logo.svg",triangle.render())
    
    }
})
