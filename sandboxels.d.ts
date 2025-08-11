// Sandboxels.d.ts

declare class Pixel {
	constructor(x: number, y: number, element: string)

	[pixelProperty: string]: any // Unfinished
}

declare function logMessage(text: string): void

declare function deletePixel(x: number, y: number): void

declare function getNeighbors(pixel: Pixel): Pixel[]

declare function selectElement(element: string): void

declare function selectCategory(category: string): void

declare function runAfterLoad(func: () => void): void

declare function runAfterReset(callback: () => void): void

declare function runAfterAutogen(callback: () => void): void

declare function runEveryTick(callback: () => void): void

declare function renderPrePixel(callback: (ctx: CanvasRenderingContext2D) => void): void

declare function renderPostPixel(callback: (ctx: CanvasRenderingContext2D) => void): void

declare function dependOn(modName: string, callback: () => void, forceLoad: boolean): void

declare function hexToRGB(hex: string): { r: number, g: number, b: number }

declare let pixelMap: Pixel[][]
declare let currentPixels: Pixel[]
declare let pixelSize: number
declare let maxPixelCount: number
declare let width: number
declare let height: number
declare let mouseType: "left" | "middle" | "right"
declare let mouseIsDown: boolean
declare let mousePos: { x: number, y: number }
declare let keybinds: { [key: string]: (e: KeyboardEvent) => void }
declare let elements: ElementsType
declare let currentElement: string
declare let prevElement: string
declare let enabledMods: string[]
declare let canvas: HTMLCanvasElement
declare let gameCanvas: HTMLCanvasElement
declare let pixelTicks: number
declare let showingMenu: string | false

type ElementData = {
	name?: string,
	color?: string,
	behavior?: (pixel: Pixel) => {} | string[][],
	ignore?: string[]
	category?: string
	density?: number
	state?: "solid" | "liquid" | "gas"
	reactions?: {
		[reactant: string]: {
			elem1: string,
			elem2?: string | null,
			oneway?: boolean
		}
	}
	conduct?: number
	behaviorOn?: (pixel: Pixel) => {} | string[][]
	colorOn?: string
	temp?: number
	tempHigh?: number
	tempLow?: number
	stateHigh?: string
	stateLow?: string
	viscosity?: number
	burn?: number
	burnTime?: number
	burnInto?: string
	fireColor?: string
	burning?: boolean
	charge?: number
	hardness?: number
	[key: string]: any;
};
type ElementsType = { [elementName: string]: ElementData }
