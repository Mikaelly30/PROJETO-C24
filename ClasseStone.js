class ClasseStone {
    constructor(x,y,width, height){
		var options={
			'restitution':0.8,
			'friction':0.9,
			'density':12
		}
	
	
		this.x=x;
		this.y=y;
		this.width=width;
        this.height=height;
		
		this.body = Bodies.rectangle(x, y, width, height, options);
	    World.add(world, this.body);

	}
	display()
	{
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        strokeWeight(4);
        stroke(30);
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill(30);
        rect(0, 0, this.width, this.height);
        pop();
      }

}