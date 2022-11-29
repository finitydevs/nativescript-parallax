import { EventData, Page, ScrollEventData } from "@nativescript/core";

// Event handler for Page "loaded" event attached in main-page.xml
export function pageLoaded(args: EventData) {
	let page = <Page>args.object;
	page.actionBarHidden = true;
}

exports.onScroll = function (args: any) {
	var data = args.data as ScrollEventData;
	console.log("Scrolling: " + args.direction + " " + data.scrollY);
}

exports.onAnchored = function (args: any) {
	console.log("Anchored");
}

exports.onUnAnchored = function (args: any) {
	console.log("UnAnchored");
}