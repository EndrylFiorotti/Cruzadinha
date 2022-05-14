function validarAdressBus() {
    // AdressBus
    var Palavra1 = "adressbus"
    var PalavraAdressBus = Array(adressBus1.value.toLowerCase(), adressBus2.value.toLowerCase(), adressBus3.value.toLowerCase(), adressBus4.value.toLowerCase(),
        adressBus5.value.toLowerCase(), adressBus6.value.toLowerCase(), adressBus7.value.toLowerCase(), adressBus8.value.toLowerCase(), adressBus9.value.toLowerCase())

    for ( var contador1 = 1; contador1 <= Palavra1.length; contador1++ ){
        if ( PalavraAdressBus[contador1-1] != Palavra1[contador1-1] ) {
            document.getElementById(`adressBus${contador1}`).style.backgroundColor = "rgb( 255, 0, 0, 0.5 )"
        } else {
            document.getElementById(`adressBus${contador1}`).style.backgroundColor = "rgb( 0, 255, 0, 0.5 )"
        }
    }
}

function validarRegistradores() {
    // AdressBus
    var Palavra2 = "registradores"
    var PalavraRegistradores = Array(registradores1.value.toLowerCase(), registradores2.value.toLowerCase(), registradores3.value.toLowerCase(), memoriaMassa6.value.toLowerCase(),
        registradores5.value.toLowerCase(), registradores6.value.toLowerCase(), registradores7.value.toLowerCase(), registradores8.value.toLowerCase(), registradores9.value.toLowerCase(),
        registradores10.value.toLowerCase(), registradores11.value.toLowerCase(), registradores12.value.toLowerCase(), registradores13.value.toLowerCase())

    for ( var contador1 = 1; contador1 <= Palavra2.length; contador1++ ){
        if ( PalavraRegistradores[contador1-1] != Palavra2[contador1-1] ) {
            if ( contador1 == 4 ) {
                document.getElementById(`memoriaMassa6`).style.backgroundColor = "rgb( 255, 0, 0, 0.5 )"
            } else {
                document.getElementById(`registradores${contador1}`).style.backgroundColor = "rgb( 255, 0, 0, 0.5 )"
            }
        } else {
            if ( contador1 == 4 ) {
                document.getElementById(`memoriaMassa6`).style.backgroundColor = "rgb( 0, 255, 0, 0.5 )"
            } else {
                document.getElementById(`registradores${contador1}`).style.backgroundColor = "rgb( 0, 255, 0, 0.5 )"
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

    for ( var contador1 = 1; contador1 <= Palavra3.length; contador1++ ){
        if ( PalavraMemoriaMassa[contador1-1] != Palavra3[contador1-1] ) {
            if ( contador1 == 2 ) {
                document.getElementById(`adressBus4`).style.backgroundColor = "rgb( 255, 0, 0, 0.5 )"
            } else {
                document.getElementById(`memoriaMassa${contador1}`).style.backgroundColor = "rgb( 255, 0, 0, 0.5 )"
            }
        } else {
            if ( contador1 == 2 ) {
                document.getElementById(`adressBus4`).style.backgroundColor = "rgb( 0, 255, 0, 0.5 )"
            } else {
                document.getElementById(`memoriaMassa${contador1}`).style.backgroundColor = "rgb( 0, 255, 0, 0.5 )"
            }
        }
    }
}

function validarRAM() {
    // AdressBus
    var Palavra4 = "ram"
    var PalavraRAM = Array(registradores1.value.toLowerCase(), RAM2.value.toLowerCase(), RAM3.value.toLowerCase())

    for ( var contador1 = 1; contador1 <= Palavra4.length; contador1++ ){
        if ( PalavraRAM[contador1-1] != Palavra4[contador1-1] ) {
            if ( contador1 == 1 ) {
                document.getElementById(`registradores1`).style.backgroundColor = "rgb( 255, 0, 0, 0.5 )"
            } else {
                document.getElementById(`RAM${contador1}`).style.backgroundColor = "rgb( 255, 0, 0, 0.5 )"
            }
        } else {
            if ( contador1 == 1 ) {
                document.getElementById(`registradores1`).style.backgroundColor = "rgb( 0, 255, 0, 0.5 )"
            } else {
                document.getElementById(`RAM${contador1}`).style.backgroundColor = "rgb( 0, 255, 0, 0.5 )"
            }
        }
    }
}

function validarCS() {
    // AdressBus
    var Palavra5 = "cs"
    var PalavraCS = Array(CS1.value.toLowerCase(), memoriaMassa10.value.toLowerCase())

    for ( var contador1 = 1; contador1 <= Palavra5.length; contador1++ ){
        if ( PalavraCS[contador1-1] != Palavra5[contador1-1] ) {
            if ( contador1 == 2 ) {
                document.getElementById(`memoriaMassa10`).style.backgroundColor = "rgb( 255, 0, 0, 0.5 )"
            } else {
                document.getElementById(`CS${contador1}`).style.backgroundColor = "rgb( 255, 0, 0, 0.5 )"
            }
        } else {
            if ( contador1 == 2 ) {
                document.getElementById(`memoriaMassa10`).style.backgroundColor = "rgb( 0, 255, 0, 0.5 )"
            } else {
                document.getElementById(`CS${contador1}`).style.backgroundColor = "rgb( 0, 255, 0, 0.5 )"
            }
        }
    }
}

function validarFlash() {
    // AdressBus
    var Palavra6 = "flash"
    var PalavraFlash = Array(Flash1.value.toLowerCase(), Flash2.value.toLowerCase(), memoriaMassa12.value.toLowerCase(), Flash4.value.toLowerCase(), Flash5.value.toLowerCase())

    for ( var contador1 = 1; contador1 <= Palavra6.length; contador1++ ){
        if ( PalavraFlash[contador1-1] != Palavra6[contador1-1] ) {
            if ( contador1 == 3 ) {
                document.getElementById(`memoriaMassa12`).style.backgroundColor = "rgb( 255, 0, 0, 0.5 )"
            } else {
                document.getElementById(`Flash${contador1}`).style.backgroundColor = "rgb( 255, 0, 0, 0.5 )"
            }
        } else {
            if ( contador1 == 3 ) {
                document.getElementById(`memoriaMassa12`).style.backgroundColor = "rgb( 0, 255, 0, 0.5 )"
            } else {
                document.getElementById(`Flash${contador1}`).style.backgroundColor = "rgb( 0, 255, 0, 0.5 )"
            }
        }
    }
}

function validarULA() {
    // AdressBus
    var Palavra7 = "ula"
    var PalavraULA = Array(ULA1.value.toLowerCase(), ULA2.value.toLowerCase(), registradores8.value.toLowerCase())

    for ( var contador1 = 1; contador1 <= Palavra7.length; contador1++ ){
        if ( PalavraULA[contador1-1] != Palavra7[contador1-1] ) {
            if ( contador1 == 3 ) {
                document.getElementById(`registradores8`).style.backgroundColor = "rgb( 255, 0, 0, 0.5 )"
            } else {
                document.getElementById(`ULA${contador1}`).style.backgroundColor = "rgb( 255, 0, 0, 0.5 )"
            }
        } else {
            if ( contador1 == 3 ) {
                document.getElementById(`registradores8`).style.backgroundColor = "rgb( 0, 255, 0, 0.5 )"
            } else {
                document.getElementById(`ULA${contador1}`).style.backgroundColor = "rgb( 0, 255, 0, 0.5 )"
            }
        }
    }
}

function validarCPU() {
    // AdressBus
    var Palavra8 = "cpu"
    var PalavraCPU = Array(CPU1.value.toLowerCase(), CPU2.value.toLowerCase(), ULA1.value.toLowerCase())

    for ( var contador1 = 1; contador1 <= Palavra8.length; contador1++ ){
        if ( PalavraCPU[contador1-1] != Palavra8[contador1-1] ) {
            if ( contador1 == 3 ) {
                document.getElementById(`ULA1`).style.backgroundColor = "rgb( 255, 0, 0, 0.5 )"
            } else {
                document.getElementById(`CPU${contador1}`).style.backgroundColor = "rgb( 255, 0, 0, 0.5 )"
            }
        } else {
            if ( contador1 == 3 ) {
                document.getElementById(`ULA1`).style.backgroundColor = "rgb( 0, 255, 0, 0.5 )"
            } else {
                document.getElementById(`CPU${contador1}`).style.backgroundColor = "rgb( 0, 255, 0, 0.5 )"
            }
        }
    }
}

function validarROM() {
    // AdressBus
    var Palavra9 = "rom"
    var PalavraROM = Array(ROM1.value.toLowerCase(), registradores10.value.toLowerCase(), ROM3.value.toLowerCase())

    for ( var contador1 = 1; contador1 <= Palavra9.length; contador1++ ){
        if ( PalavraROM[contador1-1] != Palavra9[contador1-1] ) {
            if ( contador1 == 2 ) {
                document.getElementById(`registradores10`).style.backgroundColor = "rgb( 255, 0, 0, 0.5 )"
            } else {
                document.getElementById(`ROM${contador1}`).style.backgroundColor = "rgb( 255, 0, 0, 0.5 )"
            }
        } else {
            if ( contador1 == 2 ) {
                document.getElementById(`registradores10`).style.backgroundColor = "rgb( 0, 255, 0, 0.5 )"
            } else {
                document.getElementById(`ROM${contador1}`).style.backgroundColor = "rgb( 0, 255, 0, 0.5 )"
            }
        }
    }
}

function validarEprom() {
    // AdressBus
    var Palavra10 = "eprom"
    var PalavraEprom = Array(registradores12.value.toLowerCase(), EPROM2.value.toLowerCase(), EPROM3.value.toLowerCase(), 
    EPROM4.value.toLowerCase(), EPROM5.value.toLowerCase())

    for ( var contador1 = 1; contador1 <= Palavra10.length; contador1++ ){
        if ( PalavraEprom[contador1-1] != Palavra10[contador1-1] ) {
            if ( contador1 == 1 ) {
                document.getElementById(`registradores12`).style.backgroundColor = "rgb( 255, 0, 0, 0.5 )"
            } else {
                document.getElementById(`EPROM${contador1}`).style.backgroundColor = "rgb( 255, 0, 0, 0.5 )"
            }
        } else {
            if ( contador1 == 1 ) {
                document.getElementById(`registradores12`).style.backgroundColor = "rgb( 0, 255, 0, 0.5 )"
            } else {
                document.getElementById(`EPROM${contador1}`).style.backgroundColor = "rgb( 0, 255, 0, 0.5 )"
            }
        }
    }
}

function validarDMA() {
    // AdressBus
    var Palavra11 = "dma"
    var PalavraDMA = Array(DMA1.value.toLowerCase(), EPROM5.value.toLowerCase(), DMA3.value.toLowerCase(), )

    for ( var contador1 = 1; contador1 <= Palavra11.length; contador1++ ){
        if ( PalavraDMA[contador1-1] != Palavra11[contador1-1] ) {
            if ( contador1 == 2 ) {
                document.getElementById(`EPROM5`).style.backgroundColor = "rgb( 255, 0, 0, 0.5 )"
            } else {
                document.getElementById(`DMA${contador1}`).style.backgroundColor = "rgb( 255, 0, 0, 0.5 )"
            }
        } else {
            if ( contador1 == 2 ) {
                document.getElementById(`EPROM5`).style.backgroundColor = "rgb( 0, 255, 0, 0.5 )"
            } else {
                document.getElementById(`DMA${contador1}`).style.backgroundColor = "rgb( 0, 255, 0, 0.5 )"
            }
        }
    }
}

function validarDataBus() {
    // AdressBus
    var Palavra12 = "databus"
    var PalavraDataBus = Array(dataBus1.value.toLowerCase(), dataBus2.value.toLowerCase(), dataBus3.value.toLowerCase(),
    dataBus4.value.toLowerCase(), dataBus5.value.toLowerCase(), dataBus6.value.toLowerCase(), adressBus6.value.toLowerCase())

    for ( var contador1 = 1; contador1 <= Palavra12.length; contador1++ ){
        if ( PalavraDataBus[contador1-1] != Palavra12[contador1-1] ) {
            if ( contador1 == 7 ) {
                document.getElementById(`adressBus6`).style.backgroundColor = "rgb( 255, 0, 0, 0.5 )"
            } else {
                document.getElementById(`dataBus${contador1}`).style.backgroundColor = "rgb( 255, 0, 0, 0.5 )"
            }
        } else {
            if ( contador1 == 7 ) {
                document.getElementById(`adressBus6`).style.backgroundColor = "rgb( 0, 255, 0, 0.5 )"
            } else {
                document.getElementById(`dataBus${contador1}`).style.backgroundColor = "rgb( 0, 255, 0, 0.5 )"
            }
        }
    }
}

function validarDualCore() {
    // AdressBus
    var Palavra13 = "dualcore"
    var PalavraDualCore = Array(dataBus1.value.toLowerCase(), dualCore2.value.toLowerCase(), dualCore3.value.toLowerCase(),
    dualCore4.value.toLowerCase(), dualCore5.value.toLowerCase(), dualCore6.value.toLowerCase(), dualCore7.value.toLowerCase(), dualCore8.value.toLowerCase())

    for ( var contador1 = 1; contador1 <= Palavra13.length; contador1++ ){
        if ( PalavraDualCore[contador1-1] != Palavra13[contador1-1] ) {
            if ( contador1 == 1 ) {
                document.getElementById(`dataBus1`).style.backgroundColor = "rgb( 255, 0, 0, 0.5 )"
            } else {
                document.getElementById(`dualCore${contador1}`).style.backgroundColor = "rgb( 255, 0, 0, 0.5 )"
            }
        } else {
            if ( contador1 == 1 ) {
                document.getElementById(`dataBus1`).style.backgroundColor = "rgb( 0, 255, 0, 0.5 )"
            } else {
                document.getElementById(`dualCore${contador1}`).style.backgroundColor = "rgb( 0, 255, 0, 0.5 )"
            }
        }
    }
}

function validarQuadCore() {
    // AdressBus
    var Palavra14 = "quadcore"
    var PalavraQuadCore = Array(quadCore1.value.toLowerCase(), quadCore2.value.toLowerCase(), dataBus4.value.toLowerCase(),
    quadCore4.value.toLowerCase(), quadCore5.value.toLowerCase(), quadCore6.value.toLowerCase(), quadCore7.value.toLowerCase(), quadCore8.value.toLowerCase())

    for ( var contador1 = 1; contador1 <= Palavra14.length; contador1++ ){
        if ( PalavraQuadCore[contador1-1] != Palavra14[contador1-1] ) {
            if ( contador1 == 3 ) {
                document.getElementById(`dataBus4`).style.backgroundColor = "rgb( 255, 0, 0, 0.5 )"
            } else {
                document.getElementById(`quadCore${contador1}`).style.backgroundColor = "rgb( 255, 0, 0, 0.5 )"
            }
        } else {
            if ( contador1 == 3 ) {
                document.getElementById(`dataBus4`).style.backgroundColor = "rgb( 0, 255, 0, 0.5 )"
            } else {
                document.getElementById(`quadCore${contador1}`).style.backgroundColor = "rgb( 0, 255, 0, 0.5 )"
            }
        }
    }
}