function linspace(initial, final, amount){
    returnarr = []
    totalrange = final - initial
    dn = totalrange/amount
    blank = initial
    returnarr.push(blank)
    while(blank < final-dn){
        blank += dn
        returnarr.push(blank)
    }
    return returnarr
}

function zeros3D(xlen, ylen, zlen){
    returnarr = new Array(xlen)
    for(x = 0; x < xlen; x++){
        returnarr[x] = new Array(ylen)
    }
    for(x = 0; x < xlen; x++){
        for(y = 0; y < ylen; y++){
            returnarr[x][y] = new Array(zlen)
        }
    }

    for(x = 0; x < xlen; x++){
        for(y = 0; y < ylen; y++){
            for(z = 0; z < zlen; z++){
            returnarr[x][y][z] = 0
            }
        }
    }
    return returnarr
}

function zeros2D(xlen, ylen){
    returnarr = new Array(xlen)
    for(x = 0; x < xlen; x++){
        returnarr[x] = new Array(ylen)
    }
    for(x = 0; x < xlen; x++){
        for(y = 0; y < ylen; y++){
            returnarr[x][y] = 0
        }
    }
    return returnarr
}

function angleBetweenPoints(x1,y1,x2,y2){
    xdis = x2-x1
    ydis = y2-y1

    if (xdis > 0)
        return datan(ydis/xdis)+180
    else{
        return datan(ydis/xdis)
    }
}

function clampNumber(inmin, inmax, outmin, outmax, num){
    return (num/(inmax+inmin)*(outmin+outmax))
}
