function qs(selector,baseElement=document){
	return baseElement.querySelector(selector)
}

const qsa=(selector,baseElement=document)=>
	baseElement.QuerySelectorAll(selector)

export {qs,qsa}