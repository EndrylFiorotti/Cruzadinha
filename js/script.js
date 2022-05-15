function validarAdressBus() {
    // AdressBus
    var Palavra1 = "adressbus"
    var PalavraAdressBus = Array(adressBus1.value.toLowerCase(), adressBus2.value.toLowerCase(), adressBus3.value.toLowerCase(), adressBus4.value.toLowerCase(),
        adressBus5.value.toLowerCase(), adressBus6.value.toLowerCase(), adressBus7.value.toLowerCase(), adressBus8.value.toLowerCase(), adressBus9.value.toLowerCase())

    for ( var i = 1; i <= Palavra1.length; i++ ){
        if ( PalavraAdressBus[i-1] != Palavra1[i-1] ) {
            document.getElementById(`adressBus${i}`).style.backgroundColor = "rgb( 255, 0, 0, 0.5 )"
        } else {
            document.getElementById(`adressBus${i}`).style.backgroundColor = "rgb( 0, 255, 0, 0.5 )"
        }
    }
}

function validarRegistradores() {
    // AdressBus
    var Palavra2 = "registradores"
    var PalavraRegistradores = Array(registradores1.value.toLowerCase(), registradores2.value.toLowerCase(), registradores3.value.toLowerCase(), memoriaMassa6.value.toLowerCase(),
        registradores5.value.toLowerCase(), registradores6.value.toLowerCase(), registradores7.value.toLowerCase(), registradores8.value.toLowerCase(), registradores9.value.toLowerCase(),
        registradores10.value.toLowerCase(), registradores11.value.toLowerCase(), registradores12.value.toLowerCase(), registradores13.value.toLowerCase())

    for ( var i = 1; i <= Palavra2.length; i++ ){
        if ( PalavraRegistradores[i-1] != Palavra2[i-1] ) {
            if ( i == 4 ) {
                document.getElementById(`memoriaMassa6`).style.backgroundColor = "rgb( 255, 0, 0, 0.5 )"
            } else {
                document.getElementById(`registradores${i}`).style.backgroundColor = "rgb( 255, 0, 0, 0.5 )"
            }
        } else {
            if ( i == 4 ) {
                document.getElementById(`memoriaMassa6`).style.backgroundColor = "rgb( 0, 255, 0, 0.5 )"
            } else {
                document.getElementById(`registradores${i}`).style.backgroundColor = "rgb( 0, 255, 0, 0.5 )"
            }
        }
    }
}

function validarMemoriaMassa() {
    // AdressBus
    var Palavra3 = "memoriamassa"
    var PalavraMemoriaMassa = Array(memoriaMassa1.value.toLowerCase(), adressBus4.value.toLowerCase(), memoriaMassa3.value.toLowerCase(), memoriaMassa4.value.toLowerCase(),
        memoriaMassa5.value.toLowerCase(), memoriaMassa6.value.toLowerCase(), memoriaMassa7.value.toLowerCase(), memoriaMassa8.value.toLowerCase(), memoriaMassa9.value.toLowerCase(),
        memoriaMassa10.value.toLowerCase(), memoriaMassa11.value.toLowerCase(), memoriaMassa12.value.toLowerCase())

    for ( var i = 1; i <= Palavra3.length; i++ ){
        if ( PalavraMemoriaMassa[i-1] != Palavra3[i-1] ) {
            if ( i == 2 ) {
                document.getElementById(`adressBus4`).style.backgroundColor = "rgb( 255, 0, 0, 0.5 )"
            } else {
                document.getElementById(`memoriaMassa${i}`).style.backgroundColor = "rgb( 255, 0, 0, 0.5 )"
            }
        } else {
            if ( i == 2 ) {
                document.getElementById(`adressBus4`).style.backgroundColor = "rgb( 0, 255, 0, 0.5 )"
            } else {
                document.getElementById(`memoriaMassa${i}`).style.backgroundColor = "rgb( 0, 255, 0, 0.5 )"
            }
        }
    }
}

function validarRAM() {
    // AdressBus
    var Palavra4 = "ram"
    var PalavraRAM = Array(registradores1.value.toLowerCase(), RAM2.value.toLowerCase(), RAM3.value.toLowerCase())

    for ( var i = 1; i <= Palavra4.length; i++ ){
        if ( PalavraRAM[i-1] != Palavra4[i-1] ) {
            if ( i == 1 ) {
                document.getElementById(`registradores1`).style.backgroundColor = "rgb( 255, 0, 0, 0.5 )"
            } else {
                document.getElementById(`RAM${i}`).style.backgroundColor = "rgb( 255, 0, 0, 0.5 )"
            }
        } else {
            if ( i == 1 ) {
                document.getElementById(`registradores1`).style.backgroundColor = "rgb( 0, 255, 0, 0.5 )"
            } else {
                document.getElementById(`RAM${i}`).style.backgroundColor = "rgb( 0, 255, 0, 0.5 )"
            }
        }
    }
}

function validarCS() {
    // AdressBus
    var Palavra5 = "cs"
    var PalavraCS = Array(CS1.value.toLowerCase(), memoriaMassa10.value.toLowerCase())

    for ( var i = 1; i <= Palavra5.length; i++ ){
        if ( PalavraCS[i-1] != Palavra5[i-1] ) {
            if ( i == 2 ) {
                document.getElementById(`memoriaMassa10`).style.backgroundColor = "rgb( 255, 0, 0, 0.5 )"
            } else {
                document.getElementById(`CS${i}`).style.backgroundColor = "rgb( 255, 0, 0, 0.5 )"
            }
        } else {
            if ( i == 2 ) {
                document.getElementById(`memoriaMassa10`).style.backgroundColor = "rgb( 0, 255, 0, 0.5 )"
            } else {
                document.getElementById(`CS${i}`).style.backgroundColor = "rgb( 0, 255, 0, 0.5 )"
            }
        }
    }
}

function validarFlash() {
    // AdressBus
    var Palavra6 = "flash"
    var PalavraFlash = Array(Flash1.value.toLowerCase(), Flash2.value.toLowerCase(), memoriaMassa12.value.toLowerCase(), Flash4.value.toLowerCase(), Flash5.value.toLowerCase())

    for ( var i = 1; i <= Palavra6.length; i++ ){
        if ( PalavraFlash[i-1] != Palavra6[i-1] ) {
            if ( i == 3 ) {
                document.getElementById(`memoriaMassa12`).style.backgroundColor = "rgb( 255, 0, 0, 0.5 )"
            } else {
                document.getElementById(`Flash${i}`).style.backgroundColor = "rgb( 255, 0, 0, 0.5 )"
            }
        } else {
            if ( i == 3 ) {
                document.getElementById(`memoriaMassa12`).style.backgroundColor = "rgb( 0, 255, 0, 0.5 )"
            } else {
                document.getElementById(`Flash${i}`).style.backgroundColor = "rgb( 0, 255, 0, 0.5 )"
            }
        }
    }
}

function validarULA() {
    // AdressBus
    var Palavra7 = "ula"
    var PalavraULA = Array(ULA1.value.toLowerCase(), ULA2.value.toLowerCase(), registradores8.value.toLowerCase())

    for ( var i = 1; i <= Palavra7.length; i++ ){
        if ( PalavraULA[i-1] != Palavra7[i-1] ) {
            if ( i == 3 ) {
                document.getElementById(`registradores8`).style.backgroundColor = "rgb( 255, 0, 0, 0.5 )"
            } else {
                document.getElementById(`ULA${i}`).style.backgroundColor = "rgb( 255, 0, 0, 0.5 )"
            }
        } else {
            if ( i == 3 ) {
                document.getElementById(`registradores8`).style.backgroundColor = "rgb( 0, 255, 0, 0.5 )"
            } else {
                document.getElementById(`ULA${i}`).style.backgroundColor = "rgb( 0, 255, 0, 0.5 )"
            }
        }
    }
}

function validarCPU() {
    // AdressBus
    var Palavra8 = "cpu"
    var PalavraCPU = Array(CPU1.value.toLowerCase(), CPU2.value.toLowerCase(), ULA1.value.toLowerCase())

    for ( var i = 1; i <= Palavra8.length; i++ ){
        if ( PalavraCPU[i-1] != Palavra8[i-1] ) {
            if ( i == 3 ) {
                document.getElementById(`ULA1`).style.backgroundColor = "rgb( 255, 0, 0, 0.5 )"
            } else {
                document.getElementById(`CPU${i}`).style.backgroundColor = "rgb( 255, 0, 0, 0.5 )"
            }
        } else {
            if ( i == 3 ) {
                document.getElementById(`ULA1`).style.backgroundColor = "rgb( 0, 255, 0, 0.5 )"
            } else {
                document.getElementById(`CPU${i}`).style.backgroundColor = "rgb( 0, 255, 0, 0.5 )"
            }
        }
    }
}

function validarROM() {
    // AdressBus
    var Palavra9 = "rom"
    var PalavraROM = Array(ROM1.value.toLowerCase(), registradores10.value.toLowerCase(), ROM3.value.toLowerCase())

    for ( var i = 1; i <= Palavra9.length; i++ ){
        if ( PalavraROM[i-1] != Palavra9[i-1] ) {
            if ( i == 2 ) {
                document.getElementById(`registradores10`).style.backgroundColor = "rgb( 255, 0, 0, 0.5 )"
            } else {
                document.getElementById(`ROM${i}`).style.backgroundColor = "rgb( 255, 0, 0, 0.5 )"
            }
        } else {
            if ( i == 2 ) {
                document.getElementById(`registradores10`).style.backgroundColor = "rgb( 0, 255, 0, 0.5 )"
            } else {
                document.getElementById(`ROM${i}`).style.backgroundColor = "rgb( 0, 255, 0, 0.5 )"
            }
        }
    }
}

function validarEprom() {
    // AdressBus
    var Palavra10 = "eprom"
    var PalavraEprom = Array(registradores12.value.toLowerCase(), EPROM2.value.toLowerCase(), EPROM3.value.toLowerCase(), 
    EPROM4.value.toLowerCase(), EPROM5.value.toLowerCase())

    for ( var i = 1; i <= Palavra10.length; i++ ){
        if ( PalavraEprom[i-1] != Palavra10[i-1] ) {
            if ( i == 1 ) {
                document.getElementById(`registradores12`).style.backgroundColor = "rgb( 255, 0, 0, 0.5 )"
            } else {
                document.getElementById(`EPROM${i}`).style.backgroundColor = "rgb( 255, 0, 0, 0.5 )"
            }
        } else {
            if ( i == 1 ) {
                document.getElementById(`registradores12`).style.backgroundColor = "rgb( 0, 255, 0, 0.5 )"
            } else {
                document.getElementById(`EPROM${i}`).style.backgroundColor = "rgb( 0, 255, 0, 0.5 )"
            }
        }
    }
}

function validarDMA() {
    // AdressBus
    var Palavra11 = "dma"
    var PalavraDMA = Array(DMA1.value.toLowerCase(), EPROM5.value.toLowerCase(), DMA3.value.toLowerCase(), )

    for ( var i = 1; i <= Palavra11.length; i++ ){
        if ( PalavraDMA[i-1] != Palavra11[i-1] ) {
            if ( i == 2 ) {
                document.getElementById(`EPROM5`).style.backgroundColor = "rgb( 255, 0, 0, 0.5 )"
            } else {
                document.getElementById(`DMA${i}`).style.backgroundColor = "rgb( 255, 0, 0, 0.5 )"
            }
        } else {
            if ( i == 2 ) {
                document.getElementById(`EPROM5`).style.backgroundColor = "rgb( 0, 255, 0, 0.5 )"
            } else {
                document.getElementById(`DMA${i}`).style.backgroundColor = "rgb( 0, 255, 0, 0.5 )"
            }
        }
    }
}

function validarDataBus() {
    // AdressBus
    var Palavra12 = "databus"
    var PalavraDataBus = Array(dataBus1.value.toLowerCase(), dataBus2.value.toLowerCase(), dataBus3.value.toLowerCase(),
    dataBus4.value.toLowerCase(), dataBus5.value.toLowerCase(), dataBus6.value.toLowerCase(), adressBus6.value.toLowerCase())

    for ( var i = 1; i <= Palavra12.length; i++ ){
        if ( PalavraDataBus[i-1] != Palavra12[i-1] ) {
            if ( i == 7 ) {
                document.getElementById(`adressBus6`).style.backgroundColor = "rgb( 255, 0, 0, 0.5 )"
            } else {
                document.getElementById(`dataBus${i}`).style.backgroundColor = "rgb( 255, 0, 0, 0.5 )"
            }
        } else {
            if ( i == 7 ) {
                document.getElementById(`adressBus6`).style.backgroundColor = "rgb( 0, 255, 0, 0.5 )"
            } else {
                document.getElementById(`dataBus${i}`).style.backgroundColor = "rgb( 0, 255, 0, 0.5 )"
            }
        }
    }
}

function validarDualCore() {
    // AdressBus
    var Palavra13 = "dualcore"
    var PalavraDualCore = Array(dataBus1.value.toLowerCase(), dualCore2.value.toLowerCase(), dualCore3.value.toLowerCase(),
    dualCore4.value.toLowerCase(), dualCore5.value.toLowerCase(), dualCore6.value.toLowerCase(), dualCore7.value.toLowerCase(), dualCore8.value.toLowerCase())

    for ( var i = 1; i <= Palavra13.length; i++ ){
        if ( PalavraDualCore[i-1] != Palavra13[i-1] ) {
            if ( i == 1 ) {
                document.getElementById(`dataBus1`).style.backgroundColor = "rgb( 255, 0, 0, 0.5 )"
            } else {
                document.getElementById(`dualCore${i}`).style.backgroundColor = "rgb( 255, 0, 0, 0.5 )"
            }
        } else {
            if ( i == 1 ) {
                document.getElementById(`dataBus1`).style.backgroundColor = "rgb( 0, 255, 0, 0.5 )"
            } else {
                document.getElementById(`dualCore${i}`).style.backgroundColor = "rgb( 0, 255, 0, 0.5 )"
            }
        }
    }
}

function validarQuadCore() {
    // AdressBus
    var Palavra14 = "quadcore"
    var PalavraQuadCore = Array(quadCore1.value.toLowerCase(), quadCore2.value.toLowerCase(), dataBus4.value.toLowerCase(),
    quadCore4.value.toLowerCase(), quadCore5.value.toLowerCase(), quadCore6.value.toLowerCase(), quadCore7.value.toLowerCase(), quadCore8.value.toLowerCase())

    for ( var i = 1; i <= Palavra14.length; i++ ){
        if ( PalavraQuadCore[i-1] != Palavra14[i-1] ) {
            if ( i == 3 ) {
                document.getElementById(`dataBus4`).style.backgroundColor = "rgb( 255, 0, 0, 0.5 )"
            } else {
                document.getElementById(`quadCore${i}`).style.backgroundColor = "rgb( 255, 0, 0, 0.5 )"
            }
        } else {
            if ( i == 3 ) {
                document.getElementById(`dataBus4`).style.backgroundColor = "rgb( 0, 255, 0, 0.5 )"
            } else {
                document.getElementById(`quadCore${i}`).style.backgroundColor = "rgb( 0, 255, 0, 0.5 )"
            }
        }
    }
}