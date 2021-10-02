const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer, borracha1,borracha2,borracha3,borracha4,borracha5,borracha6,borracha7,borracha8,borracha9,
borracha10;
var pedra, ferro, eclipse;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    borracha1 = new Rubber(700,50, 10);
    borracha2 = new Rubber(700,50, 10);
    borracha3 = new Rubber(700,50, 10);
    borracha4 = new Rubber(700,50, 10);
    borracha5 = new Rubber(700,50, 10);
    borracha6 = new Rubber(700,50, 10);
    borracha7 = new Rubber(700,50, 10);
    borracha8 = new Rubber(700,50, 10);
    borracha9 = new Rubber(700,50, 10);
    borracha10 = new Rubber(700,50, 10);
    pedra = new ClasseStone(900,500, 60,60);
    ferro = new Ferro(400,500,70,20);
    eclipse = new Eclipse(1000,500,70);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    borracha10.display();
    borracha9.display();
    borracha8.display();
    borracha7.display();
    borracha6.display();
    borracha5.display();
    borracha4.display();
    borracha3.display();
    borracha2.display();
    borracha1.display();
    plane.display();
    hammer.display();
    pedra.display();
    ferro.display();
    eclipse.display();
 
}