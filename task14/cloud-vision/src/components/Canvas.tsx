import { AiData, TextAnnotation, Vertex } from "../services/interfaces/DataResponses"
import { useEffect, useRef } from "react"

export interface CanvasProps {
  image64: string
  detectionData: AiData | null
}

function Canvas(props: CanvasProps) {
  const canvasRef = useRef(null)
  const { image64, detectionData } = props
  
  useEffect(()=> {
    if (canvasRef.current){
      const canvas: HTMLCanvasElement = canvasRef.current
      const context = canvas.getContext('2d')
      if (context){
        drawImage(context)
      }
    }
  }, [image64] )

  useEffect(() => {
    if (detectionData && canvasRef.current){
      const canvas: HTMLCanvasElement = canvasRef.current
      const context = canvas.getContext('2d')
      if (context){
        drawBoundingBoxes(context, detectionData.textAnnotations)
      }
    }
  }, [detectionData])

  const drawImage = async (ctx: CanvasRenderingContext2D) => {
    const image = await loadImage(image64)
    ctx.canvas.width=image.width
    ctx.canvas.height=image.height
    ctx.drawImage(image, 0, 0)
  }

  const drawBoundingBoxes = (ctx: CanvasRenderingContext2D, textAnnotations: TextAnnotation[]) => {
    for (let i = 0; i < textAnnotations.length; i++){
      if (i==0){
        drawBoundingBox(ctx, textAnnotations[i].boundingPoly.vertices, 3, '#535bf2')
      }else {
        drawBoundingBox(ctx, textAnnotations[i].boundingPoly.vertices)
      }
    }
  }

  const drawBoundingBox = (ctx: CanvasRenderingContext2D, vertices: Vertex[], width: number = 2, color: string = 'green') => {
    ctx.beginPath()
    ctx.lineWidth = width
    ctx.strokeStyle = color;
    ctx.moveTo(vertices[0].x,vertices[0].y)
    ctx.lineTo(vertices[1].x,vertices[1].y)
    ctx.lineTo(vertices[2].x,vertices[2].y)
    ctx.lineTo(vertices[3].x,vertices[3].y)
    ctx.closePath()
    ctx.stroke()
  }

  const loadImage = async (imageString: string) => {
    let img = new Image();
    const imageLoadPromise = new Promise(resolve => {
      img.onload = resolve
      img.src = imageString
    })
    await imageLoadPromise
    return img;
  }

  return <canvas ref={canvasRef} className="image-canvas"/>
}

export default Canvas