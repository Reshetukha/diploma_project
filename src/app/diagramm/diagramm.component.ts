// import {  Injectable, Component, OnInit, OnChanges, ViewChild, ElementRef, Input, ViewEncapsulation } from '@angular/core';
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
  private chartA: any;
  private chartB: any;
  private width: number;
  private height: number;
  private xScale: any;
  private yScaleE: any;
  private xScaleE: any;
  private xScaleB: any;
  private yScaleB: any;
  private colors: any;
  private xAxisE: any;
  private yAxisE: any;
  private xAxisB: any;
  private yAxisB: any;
  private xDomainA: any;
  private yDomainA: any;
  private xDomainB: any;
  private yDomainB: any;
  private elPower: any;
  private elTorque: any;
  private BPower: any;
  private BTorque: any;
  private rawDataB: any;
  private dataA: any;
  private dataB: any;
  private svg: any;

  selectedCurve = 'curveLinear';

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
      .x(function(d: any) { return self.xScaleE(d.x);}) // apply the x scale to the x data
      .y(function(d: any) { return self.yScaleE(d.y);}) // apply the y scale to the y data
      .curve(d3.curveCardinal);

    let mylineB = d3.line()
      .x(function(d: any) { return self.xScaleB(d.x);}) // apply the x scale to the x data
      .y(function(d: any) { return self.yScaleB(d.y);}) // apply the y scale to the y data
      .curve(d3.curveCardinal);

    console.log("line(xy) is:", mylineE(this.elPower)); // shows the exact pen moves

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
      .attr("class", "line") // attributes given one at a time
      .attr("d", mylineE(this.elPower)) // use the value of myline(xy) as the data, 'd'
      .style("fill", "none")
      .style("stroke", "black")
      .style("stroke-width", 2);

    svgA.append("path")
      .attr("class", "line") // attributes given one at a time
      .attr("d", mylineE(this.elTorque)) // use the value of myline(xy) as the data, 'd'
      .style("fill", "none")
      .style("stroke", "red")
      .style("stroke-width", 2);

    svgB.append("path")
      .attr("class", "line") // attributes given one at a time
      .attr("d", mylineB(this.BPower)) // use the value of myline(xy) as the data, 'd'
      .style("fill", "none")
      .style("stroke", "black")
      .style("stroke-width", 2);

    svgB.append("path")
      .attr("class", "line") // attributes given one at a time
      .attr("d", mylineB(this.BTorque)) // use the value of myline(xy) as the data, 'd'
      .style("fill", "none")
      .style("stroke", "red")
      .style("stroke-width", 2);

    // let svgA = d3.select(elementA).append('svg')
    //     .attr('width', this.width + this.margin.left + this.margin.right)
    //     .attr('height', this.height + this.margin.top + this.margin.bottom)
    //     .append('g')
    //     .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');

      // this.xAxisA = d3.axisBottom(this.xScale);
      // this.yAxisA = d3.axisLeft(this.yScale);


      // let self = this;

      // let line = d3.line()
      //   .curve(d3.curveLinear)
      //   .x(function(d: any) { return self.xScale(d.x); })
      //   .y(function(d: any) { return self.yScale(d.y); });

      // console.log(this.rawDataA);
      // this.xScale.domain(d3.extent(this.rawDataA, function(d: any) { return d.x; }));
      // this.yScale.domain(d3.extent(this.rawDataA, function(d: any) { return d.y; }));
      // console.log(this.rawDataA);

      // svgA.append('g')
      //   .attr('class', 'x axis')
      //   .attr('transform', 'translate(0,' + self.height + ')')
      //   .call(this.xScale);

      // svgA.append('g')
      //   .attr('class', 'y axis')
      //   .call(this.yScale)
      //   .append('text')
      //   .attr('transform', 'rotate(-90)')
      //   .attr('y', 6)
      //   .attr('dy', '.71em')
      //   .style('text-anchor', 'end')
      //   .text('Price ($)');

      //   console.log(this.rawDataA);

      // svgA.append('path')
      //   .datum(this.rawDataA)
      //   .attr('class', 'line')
      //   .attr('d', line);

      //   console.log('end');

        // chart plot area
    // this.chartA = svgA.append('g')
    //   .attr('class', 'bars')
    //   .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);

    // this.chartB = svgB.append('g')
    //   .attr('class', 'bars')
    //   .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);

    // define X & Y domains
    // this.xDomainA = this.rawDataA.map(d => d[0]);
    // this.yDomainA = [0, d3.max(this.rawDataA, d => d[1])];

    // this.xDomainB = this.dataB.map(d => d[0]);
    // this.yDomainB = [0, d3.max(this.dataB, d => d[1])];

    // create scales
    // this.xScaleA = d3.scaleBand().padding(0.1).domain(this.xDomainA).rangeRound([0, this.width]);
    // this.yScaleA = d3.scaleLinear().domain(this.yDomainA).range([this.height, 0]);

    // this.xScaleB = d3.scaleBand().padding(0.1).domain(this.xDomainB).rangeRound([0, this.width]);
    // this.yScaleB = d3.scaleLinear().domain(this.yDomainB).range([this.height, 0]);
    
      //lin
    // this.xScale = d3.scaleLinear().domain([0, 100]).range([0, this.width]);
    // this.yScale = d3.scaleLinear().domain([100, 0]).range([0, this.height]);

    // let x = d3.scaleLinear().domain([0, 100]).range([0, this.width]);
    // let y = d3.scaleLinear().domain([100, 0]).range([0, this.height]);

    // map data for chart
    // this.rawDataA.forEach( (item, i) => {
    //   self.dataA.push({x: self.xScale(self.rawDataA[i].x),
    //     y: self.yScale(this.rawDataA[i].y
    //     )});
    // });

    // console.log(this.dataA);

    // this.rawDataA.forEach( (item, i) => {
    //   this.dataA.push({x: this.xScale(this.rawDataA[i].x) + this.margin,
    //     y: this.yScale(this.rawDataA[i].y) + this.margin});
    // });

    // console.log(this.dataA);

    // bar colors
    // this.colors = d3.scaleLinear().domain([0, this.dataA.length]).range(<any[]>['red', 'blue']);

    // x & y axis

    // let x = d3.scaleLinear()
    //   .rangeRound([0, this.width]);

    // let y = d3.scaleLinear()
    //   .rangeRound([this.height, 0]);

    // let line = d3.line()
    //   .x((d: any) => {return x(d.x);})
    //   .y((d: any) => {return y(d.y);});
    //   // .interpolate("linear");;

    // // добавляем путь
    // svgA.append("g").append("path")
    // .attr("d", line(this.rawDataA))
    // .style("stroke", "steelblue")
    // .style("stroke-width", 2);

//     let x = d3.scaleLinear().domain([0, 100]).range([0, this.width]);
//     let y = d3.scaleLinear().domain([100, 0]).range([this.height, 0]);


    // svgA.append("path")
    //   .data(this.rawDataA)
    //   .attr("class", "line")
    //   .attr("d", line);

  }

}
