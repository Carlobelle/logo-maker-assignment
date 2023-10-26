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
    if (answerObject.shape=="Circle"){
        const circle=new Circle(answerObject.text,answerObject.textColor,answerObject.shapeColor)
        fs.writeFileSync("./examples/logo.svg",circle.render())
    } 
    if (answerObject.shape=="Square"){
        const square=new Square(answerObject.text,answerObject.textColor,answerObject.shapeColor)
        fs.writeFileSync("./examples/logo.svg",square.render())
    
    }
    if (answerObject.shape=="Triangle"){
        const triangle=new Triangle(answerObject.text,answerObject.textColor,answerObject.shapeColor)
        fs.writeFileSync("./examples/logo.svg",triangle.render())
    
    }
})
