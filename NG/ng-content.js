
// Послідовність по тегам
<div class="card card-block">
  <h4 class="card-title">
    <ng-content select="span"></ng-content> 
  </h4>
  <p class="card-text"
     [hidden]="data.hide">
    <ng-content select="h1"></ng-content> 
  </p>
  <a class="btn btn-primary"
     (click)="data.toggle()">Tell Me
  </a>
</div>

//Послідовність по класам
<div class="card card-block">
  <h4 class="card-title">
    <ng-content select=".setup"></ng-content> 
  </h4>
  <p class="card-text"
     [hidden]="data.hide">
    <ng-content select=".punchline"></ng-content> 
  </p>
  <a class="btn btn-primary"
     (click)="data.toggle()">Tell 
  </a>
</div>
//<joke *ngFor="let j of jokes" [joke]="j">/
//<span class="setup">{{ j.setup }} ?</span>
//<h1 class="punchline">{{ j.punchline }}</h1> 
//</joke>