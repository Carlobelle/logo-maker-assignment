const { Circle, Square, Triangle,} = require("../lib/shapes")
describe('Circle', () => {
    describe('text Color,text,shapeColor', () => {
        it('textColor', () => {
            const circle = new Circle("svg", "orange", "purple");
            expect(circle.textColor).toEqual("orange")
        });
    });
});
describe('square', () => {
    describe('text color,text,shapeColor', () => {
        it('textcolor', () => {
            const square = new Square("svg", "orange", "purple");
            expect(square.textColor).toEqual("orange")
        });
    });
});
describe('triangle',()=>{
    describe('textColor,text,shapeColor',() =>{
        it('textColor',() =>{
            const triangle =new Triangle("svg","orange","purple");
            expect (triangle.textColor).toEqual("orange")

        });
    });
});