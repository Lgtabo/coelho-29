class Link {
contructor(bodya,bodyb){
var lastlink = bodya.body.bodies.length - 2
this.link = Constraint.create({
    bodya: bodya.body.bodies[lastlink],
    pointa:{x:0,y:0},
    bodyb:bodyb,
    pointb:{x:0,y:0},
    length: -10,
    stffiness:0.01
})
    World.add(engine.world,this.link)
}
}