import {  Injectable, Component, OnInit, OnChanges, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3';
import { sample } from 'rxjs/operator/sample';

@Component({
  selector: 'app-diagramm',
  templateUrl: './diagramm.component.html',
  styleUrls: ['./diagramm.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DiagrammComponent implements OnInit, OnChanges {
  @ViewChild('chartA') private chartContainerA: ElementRef;
  @ViewChild('chartB') private chartContainerB: ElementRef;

  private margin: any = { top: 20, bottom: 20, left: 30, right: 20};
  private width: number;
  private height: number;
  private xScale: any;
  private yScaleE: any;
  private xScaleE: any;
  private xScaleB: any;
  private yScaleB: any;
  private xAxisE: any;
  private yAxisE: any;
  private xAxisB: any;
  private yAxisB: any;
  private elPower: any;
  private elTorque: any;
  private BPower: any;
  private BTorque: any;

  constructor() { }

  ngOnInit() {
    this.elPower = [
      {x: 15, y: 15}, {x: 25, y: 120}, {x: 50, y: 300},
      {x: 80, y: 420}, {x: 100, y: 440}, {x: 118, y: 360},
      {x: 131, y: 280}, {x: 144, y: 220}, {x: 157, y: 180},
      {x: 170, y: 160}
    ];
    this.elTorque = [
      {x: 15, y: 10}, {x: 25, y: 80}, {x: 50, y: 250},
      {x: 80, y: 420}, {x: 100, y: 485}, {x: 118, y: 460},
      {x: 131, y: 400}, {x: 144, y: 330}, {x: 157, y: 280},
      {x: 170, y: 250}
    ];

    this.BPower = [
      {x: 1500, y: 90}, {x: 1700, y: 120}, {x: 2500, y: 185},
      {x: 3300, y: 230}, {x: 3800, y: 250}, {x: 4500, y: 265},
      {x: 5400, y: 280}, {x: 6300, y: 260}, {x: 6700, y: 245}
    ];
    this.BTorque = [
      {x: 1000, y: 185}, {x: 1400, y: 205}, {x: 2000, y: 225},
      {x: 3000, y: 245}, {x: 3800, y: 250}, {x: 4300, y: 245},
      {x: 4900, y: 220}, {x: 5500, y: 190}, {x: 6000, y: 165},
      {x: 6500, y: 140}
    ];

    this.createChart();
  }

  ngOnChanges() {

  }

  createChart() {
    
    let elementA = this.chartContainerA.nativeElement;
    let elementB = this.chartContainerB.nativeElement;

    this.width = elementA.offsetWidth - this.margin.left - this.margin.right;
    this.height = elementA.offsetHeight - this.margin.top - this.margin.bottom;

    let svgA = d3.select(elementA).append('svg')
      .attr('width', elementA.offsetWidth)
      .attr('height', elementA.offsetHeight);

    let svgB = d3.select(elementB).append('svg')
      .attr('width', elementB.offsetWidth)
      .attr('height', elementB.offsetHeight);

    this.xScaleE = d3.scaleLinear().domain([0, 160]).range([0, this.width]);
    this.yScaleE = d3.scaleLinear().domain([500, 0]).range([0, this.height]);

    this.xScaleB = d3.scaleLinear().domain([0, 7000]).range([0, this.width]);
    this.yScaleB = d3.scaleLinear().domain([300, 0]).range([0, this.height]);

    let self = this;

    let mylineE = d3.line()
      .x(function(d: any) { return self.xScaleE(d.x);})
      .y(function(d: any) { return self.yScaleE(d.y);})
      .curve(d3.curveCardinal);

    let mylineB = d3.line()
      .x(function(d: any) { return self.xScaleB(d.x);})
      .y(function(d: any) { return self.yScaleB(d.y);})
      .curve(d3.curveCardinal);

    this.xAxisE = svgA.append('g')
      .attr('class', 'axis axis-x')
      .attr('transform', `translate(${this.margin.left}, ${this.margin.top + this.height})`)
      .call(d3.axisBottom(this.xScaleE))
      .append('text')
      .attr('y', 6)
      .attr('dy', '.71em')
      .attr('transform', `translate(${this.width-40}, -20)`)
      .style('text-anchor', 'end')
      .text('speed hm/h');
    this.yAxisE = svgA.append('g')
      .attr('class', 'axis axis-y')
      .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`)
      .call(d3.axisLeft(this.yScaleE))
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '.71em')
      .style('text-anchor', 'end')
      .text('kW, NM');

    this.xAxisB = svgB.append('g')
      .attr('class', 'axis axis-x')
      .attr('transform', `translate(${this.margin.left}, ${this.margin.top + this.height})`)
      .call(d3.axisBottom(this.xScaleB))
      .append('text')
      .attr('y', 6)
      .attr('dy', '.71em')
      .attr('transform', `translate(${this.width-40}, -20)`)
      .style('text-anchor', 'end')
      .text('speed rpm');;
    this.yAxisB = svgB.append('g')
      .attr('class', 'axis axis-y')
      .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`)
      .call(d3.axisLeft(this.yScaleB))
      .append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', 6)
      .attr('dy', '.71em')
      .style('text-anchor', 'end')
      .text('kW, NM');

    svgA.append("path")
      .attr("class", "line")
      .attr("d", mylineE(this.elPower))
      .style("fill", "none")
      .style("stroke", "black")
      .style("stroke-width", 2);

    svgA.append("path")
      .attr("class", "line")
      .attr("d", mylineE(this.elTorque))
      .style("fill", "none")
      .style("stroke", "red")
      .style("stroke-width", 2);

    svgB.append("path")
      .attr("class", "line")
      .attr("d", mylineB(this.BPower))
      .style("fill", "none")
      .style("stroke", "black")
      .style("stroke-width", 2);

    svgB.append("path")
      .attr("class", "line")
      .attr("d", mylineB(this.BTorque))
      .style("fill", "none")
      .style("stroke", "red")
      .style("stroke-width", 2);
  }
}
