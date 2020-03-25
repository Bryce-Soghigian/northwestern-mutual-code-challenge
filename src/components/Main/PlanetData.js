import React from "react";

export default function PlanetData(props) {
  console.log(props);
  if (props.state.length === 0) {
    return <div>Please Enter A Valid Search To View Planet Data</div>;
  } else {
    return (
      <div>
        <p>Planet name:{props.state.pl_name}</p>
        <p>It was discovered by {props.state.pl_discmethod}</p>

        <div className="bottom">
          Data for this planet was last updated on {props.state.rowupdate}
        </div>
      </div>
    );
  }
}

/*
pl_hostname: "Kepler-153"
pl_letter: "c"
pl_name: "Kepler-153 c"
pl_discmethod: "Transit"
pl_controvflag: "0.00"
pl_pnum: "2.00"
pl_orbper: 46.90232
pl_orbpererr1: 0.000215
pl_orbpererr2: -0.000215
pl_orbperlim: 0
pl_orbpern: 4
pl_orbsmax: 0.237
pl_orbsmaxerr1: null
pl_orbsmaxerr2: null
pl_orbsmaxlim: 0
pl_orbsmaxn: 1
pl_orbeccen: null
pl_orbeccenerr1: null
pl_orbeccenerr2: null
pl_orbeccenlim: null
pl_orbeccenn: 0
pl_orbincl: null
pl_orbinclerr1: null
pl_orbinclerr2: null
pl_orbincllim: null
pl_orbincln: 0
pl_bmassj: null
pl_bmassjerr1: null
pl_bmassjerr2: null
pl_bmassjlim: null
pl_bmassn: 0
pl_bmassprov: null
pl_radj: 0.226
pl_radjerr1: 0.136
pl_radjerr2: -0.136
pl_radjlim: 0
pl_radn: 3
pl_dens: null
pl_denserr1: null
pl_denserr2: null
pl_denslim: null
pl_densn: 0
pl_ttvflag: 0
pl_kepflag: 1
pl_k2flag: 0
ra_str: "18h49m50.53s"
dec_str: "+48d15m25.6s"
ra: 282.4605
st_raerr: 0.000019
dec: 48.25712
st_decerr: 0.000017
st_posn: 2
st_dist: 465.53
st_disterr1: 3.48
st_disterr2: -3.48
st_distlim: 0
st_distn: 3
st_optmag: 14.262
st_optmagerr: null
st_optmaglim: 0
st_optband: "Kepler-band"
gaia_gmag: 14.249
gaia_gmagerr: null
gaia_gmaglim: 0
st_teff: 5404
st_tefferr1: 200
st_tefferr2: -200
st_tefflim: 0
st_teffn: 6
st_mass: null
st_masserr1: null
st_masserr2: null
st_masslim: null
st_massn: 1
st_rad: 0.89
st_raderr1: 0.54
st_raderr2: -0.54
st_radlim: 0
st_radn: 6
pl_nnotes: 1
rowupdate: "2014-05-14"
pl_facility: "Kepler"
*/
