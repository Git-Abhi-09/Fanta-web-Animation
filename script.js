var tl = gsap.timeline({
    scrollTrigger:{
        trigger:".two",
        start:"0% 90%",
        end:"70% 50%",
        scrub:true,
        // markers:true
    }
})

tl.to("#fanta",{
    top:"120%",
    left:"10%"
},'orange')

tl.to("#slice",{
    top:"155%",
    left:"25%"
},'orange')

tl.to("#orange",{
    width:"15%",
    top:"165%",
    right:"10%"
},'orange')

tl.to("#leaf",{
    top:"118%",
    rotate:"120deg",
    left:"70%"
},'orange')

tl.to("#leaf2",{
    top:"118%",
    rotate:"90deg",
    left:"0%"
},'orange')

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".three",
        start:"0% 90%",
        end:"20% 50%",
        scrub:true
    }
})

tl2.from(".lemon1",{
    rotate:"-90deg",
    left:"-100%",
    opacity:0,
    top:"110%"
},'ca')

tl2.from("#cocacola",{
    rotate:"-90deg",
    left:"-100%",
    opacity:0,
    top:"110%"
},'ca')

tl2.from(".lemon2",{
    rotate:"90deg",
    left:"100%",
    opacity:0,
    top:"110%"
},'ca')

tl2.from("#pepsi",{
    rotate:"90deg",
    left:"100%",
    opacity:0,
    top:"110%"
},'ca')

tl2.to("#slice",{
    left:"42%",
    top:"198%",
    width:"15vw"
},'ca')

tl2.to("#fanta",{
    left:"41%",
    top:"208%",
    width:"17vw"
},'ca')