$(document).ready(function(){
var test = $('#1')
var alea;
var convertindexval;
var grid = [
    ["1","2","3","4"],
    ["5","6","7","8"],
    ["9","10","11","12"],
    ["13","14","15","16"]
];
var i=0;
var k=0;
var j=0;

for (i =0; i<4; i++){
    for (k =0; k<4; k++){
		j++;
	grid[k][i]=j;
convertindexval=i*4-(4-k)+5;
$('#'+convertindexval).text(grid[k][i]);
}
}
for (i =0; i<4; i++){
    for (k =0; k<4; k++){
        var l;
    if(grid[i][k]==16){
        l=i*4-(4-k)+5;
        $('#'+l).addClass('hide');
        grid[i][k]='-1';
     }
        
}
}
$('#AI').on('click', function(){
	alert('calculating');	
	var x=20000;
	var k=0;
	var counter=0;
	var win=false;
	var randomdirection;
	var fakegrid = [
    ["1","2","3","4"],
    ["5","6","7","8"],
    ["9","10","11","12"],
    ["13","14","15","16"]
	];
	var fakescore;
	var fakescorecompare=-1;	
	var possibilities=[
		//*[up, down, left, right] horizontal
		//*[up, down, left, right] vertical
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0],
		[0, 0, 0, 0]
	];
	var biggestx;
	var biggesty;
	var score;
	computertest();
	var p;
	var o;
	for (p =0; p<4; p++){
	for (o =0; o<4; o++){
	fakegrid[p][o]=grid[p][o]
			}
		}
	if (win!=true){
	for (counter=0; counter<100000; counter++){
		var currentx;
		var currenty;
		var direction;
		var holex;
		var holey;
		var i=1;
		var advancemove=0;
		
		for (i =0; i<4; i++){
			for (k =0; k<4; k++){
				if(grid[k][i]==-1){
					holex=k;
					holey=i;
				}
			}
		}
		if(holex>0){				
					fakegrid[holex][holey]=fakegrid[holex-1][holey];
					fakegrid[holex-1][holey]=-1;
					var co;
					for (co =0; co<4; co++){
					possibilities[co][1]=possibilities[co][1]+1;					;
					}
					currentx=co;
					currenty=1;
					scoretest();
		}else if(holex<3){    
					fakegrid[holex][holey]=fakegrid[holex+1][holey];
					fakegrid[holex+1][holey]=-1;					
					var co;
					for (co =0; co<4; co++){
					possibilities[co][2]=possibilities[co][2]+1;
					}
					currentx=co;
					currenty=2;
					scoretest();
		}else if(holey<3){    
					fakegrid[holex][holey]=fakegrid[holex][holey+1];
					fakegrid[holex][holey+1]=-1;
					var co;
					for (co =0; co<4; co++){
					possibilities[co][3]=possibilities[co][3]+1;
					}
					currentx=co;
					currenty=3;
					scoretest();
		}else if(holey>0){
					fakegrid[holex][holey]=fakegrid[holex][holey-1];
					fakegrid[holex][holey-1]=-1;
					var co;
					for (co =0; co<4; co++){
					possibilities[co][4]=possibilities[co][4]+1;
					}
					currentx=co;
					currenty=4;
					scoretest();
		}
			
		
		
		
	
		
		scoretest();
		if(fakescore>=score){	
		if(currenty==1){
					convertindexval=holey*4-(4-holex)+5;
					$('#'+convertindexval).removeClass('hide');
					$('#'+convertindexval).text(grid[holex-1][holey]); 					
					grid[holex][holey]=grid[holex-1][holey];
					grid[holex-1][holey]=-1;
		}else if(currenty==2){    
					convertindexval=holey*4-(4-holex)+5;
					$('#'+convertindexval).removeClass('hide');
					$('#'+convertindexval).text(grid[holex+1][holey]);		
					grid[holex][holey]=grid[holex+1][holey];
					grid[holex+1][holey]=-1;
   
		}else if(currenty==3){    
					convertindexval=holey*4-(4-holex)+5;
					$('#'+convertindexval).removeClass('hide');
					$('#'+convertindexval).text(grid[holex][holey+1]);
					grid[holex][holey]=grid[holex][holey+1];
					grid[holex][holey+1]=-1;
    
		}else if(currenty==4){
					convertindexval=(holey)*4-(4-holex)+5;
					$('#'+convertindexval).removeClass('hide');
					$('#'+convertindexval).text(grid[holex][holey-1]); 		
					grid[holex][holey]=grid[holex][holey-1];
					grid[holex][holey-1]=-1;
		}
		computertest();
			if (win){
				counter=100000;
			}
	}
	}
	}
	
	var i=1;
		for (i =0; i<4; i++){
			for (k =0; k<4; k++){
				if(grid[k][i]==-1){
					convertindexval=(i)*4-(4-k)+5;
					$('#'+convertindexval).addClass('hide');	
				}
			}
		}
		
		
	
	
	
	alert(counter+' moves done');
	
	function computertest(){
	var i=0;
    var k=0;
    var a=0;
	score=0;
    for (i =0; i<4; i++){
        for (k =0; k<4; k++){
            a++;
			if(grid[k][i]==a){
				score++;
			}
		}
    }
        if (score>=15){
            alert('Computer has solved the puzzle, mix the board to play again.');
			win=true;
        } else{
			win=false;
		}
	
	}
	
	function scoretest(){
	var i=0;
    var k=0;
    var a=0;
	var firsttime=false;
	if (fakescorecompare==-1){
		fakescorecompare=0;
		firsttime=true;
		biggestx=currentx
		biggesty=currenty
    for (i =0; i<4; i++){
        for (k =0; k<4; k++){
            a++;
			if(fakegrid[k][i]==a){
				fakescorecompare++;
			}
		}
    }
	}else{
		fakescore=0;
		for (i =0; i<4; i++){
        for (k =0; k<4; k++){
            a++;
			if(fakegrid[k][i]==a){
				fakescore++;
			}
		}
    }
	}
	if(firsttime!=true){
		if (fakescore<fakescorecompare){			
			fakescore=fakescorecompare;			
		}else{			
			fakescorecompare=fakescore;
			biggestx=currentx;
			biggesty=currenty;
		}
	}
	
	
	}
	
	
	
	
	
});

$('#mix').on('click',function(){	
	var i=0;
	for (i = 0 ; i< 20000; i++){

	var currentid = 0;
	currentid = Math.floor(Math.random() * 16)+1;	
    var x;
    var y;  
     switch(currentid) {
        case 1:
        x=0;
        y=0;
        break;
        case 2:
        x=1;
        y=0;
        break;
        case 3:
        x=2;
        y=0;
        break;
        case 4:
        x=3;
        y=0;
        break;
        case 5:
        x=0;
        y=1;
        break;
        case 6:
        x=1;
        y=1;
        break;
        case 7:
        x=2;
        y=1;
        break;
        case 8:
        x=3;
        y=1;
        break;
        case 9:
        x=0;
        y=2;
        break;
        case 10:
        x=1;
        y=2;
        break;
        case 11:
        x=2;
        y=2;
        break;
        case 12:
        x=3;
        y=2;
        break;
        case 13:
        x=0;
        y=3;
        break;
        case 14:
        x=1;
        y=3;
        break;
        case 15:
        x=2;
        y=3;
        break;
        case 16:
        x=3;
        y=3;
        break;
    }
    
	if(x>0 && grid[x-1][y]==-1){
    convertindexval=y*4-(4-(x-1))+5;
    $('#'+convertindexval).removeClass('hide');
    $('#'+convertindexval).text(grid[x][y]);    
    grid[x-1][y]=grid[x][y];
    grid[x][y]=-1;
}else if(x<3 && grid[x+1][y]==-1){    
    convertindexval=y*4-(4-(x+1))+5;
    $('#'+convertindexval).removeClass('hide');
    $('#'+convertindexval).text(grid[x][y]);        
    grid[x+1][y]=grid[x][y];
    grid[x][y]=-1;
   
}else if(y<3 && grid[x][y+1]==-1){    
    convertindexval=(y+1)*4-(4-x)+5;
    $('#'+convertindexval).removeClass('hide');
    $('#'+convertindexval).text(grid[x][y]);
    grid[x][y+1]=grid[x][y];
    grid[x][y]=-1;
    
}else if(y>0 && grid[x][y-1]==-1){
   convertindexval=(y-1)*4-(4-x)+5;
    $('#'+convertindexval).removeClass('hide');
    $('#'+convertindexval).text(grid[x][y]);        
    grid[x][y-1]=grid[x][y];
    grid[x][y]=-1;
}
	
	
}
for (i =0; i<4; i++){
    for (k =0; k<4; k++){
        var l;
    if(grid[k][i]==-1){
        l=i*4-(4-k)+5;
        $('#'+l).addClass('hide');
        grid[k][i]='-1';
     }else{
		 l=i*4-(4-k)+5;
        $('#'+l).removeClass('hide');
	 }
        
}
}

alert("mix finished");
});
$('#iowatd .btn').on('click', function(){			
    var currentid =parseInt($(this).attr('id'));
    var x=1;
    var y=1;
    var i;    
    switch(currentid) {
        case 1:
        x=0;
        y=0;
        break;
        case 2:
        x=1;
        y=0;
        break;
        case 3:
        x=2;
        y=0;
        break;
        case 4:
        x=3;
        y=0;
        break;
        case 5:
        x=0;
        y=1;
        break;
        case 6:
        x=1;
        y=1;
        break;
        case 7:
        x=2;
        y=1;
        break;
        case 8:
        x=3;
        y=1;
        break;
        case 9:
        x=0;
        y=2;
        break;
        case 10:
        x=1;
        y=2;
        break;
        case 11:
        x=2;
        y=2;
        break;
        case 12:
        x=3;
        y=2;
        break;
        case 13:
        x=0;
        y=3;
        break;
        case 14:
        x=1;
        y=3;
        break;
        case 15:
        x=2;
        y=3;
        break;
        case 16:
        x=3;
        y=3;
        break;
    }

if(x>0 && grid[x-1][y]==-1){
    convertindexval=y*4-(4-(x-1))+5;
    $('#'+convertindexval).removeClass('hide');
    $('#'+convertindexval).text(grid[x][y]);
    $(this).addClass('hide');
    grid[x-1][y]=grid[x][y];
    grid[x][y]=-1;
    testgagnant();
    
}else if(x<3 && grid[x+1][y]==-1){    
    convertindexval=y*4-(4-(x+1))+5;
    $('#'+convertindexval).removeClass('hide');

    $('#'+convertindexval).text(grid[x][y]);    
    $(this).addClass('hide');
    grid[x+1][y]=grid[x][y];
    grid[x][y]=-1;
    testgagnant();
}else if(y<3 && grid[x][y+1]==-1){    
    convertindexval=(y+1)*4-(4-x)+5;
    $('#'+convertindexval).removeClass('hide');
    $('#'+convertindexval).text(grid[x][y]);
    $(this).addClass('hide');
    grid[x][y+1]=grid[x][y];
    grid[x][y]=-1;
    testgagnant();

}else if(y>0 && grid[x][y-1]==-1){
   convertindexval=(y-1)*4-(4-x)+5;
    $('#'+convertindexval).removeClass('hide');
    $('#'+convertindexval).text(grid[x][y]);    
    $(this).addClass('hide');
    grid[x][y-1]=grid[x][y];
    grid[x][y]=-1;
    testgagnant();
}	
	


function testgagnant(){
    var i=0;
    var k=0;
    var a=0;
    var score=0;
    for (i =0; i<4; i++){
        for (k =0; k<4; k++){
            a++;
			if(grid[k][i]==a){
				score++;
			}
		}
    }
        if (score>=15){
            alert('u win, mix the board to play again.');
        } 
}



});

});
