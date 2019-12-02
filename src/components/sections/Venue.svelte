<script>
    import VenueName from '../shared/VenueName.svelte';
</script>

<style>
    .ioa-logo {
        width: 300px;
    }
    .lrn-logo {
        width: 300px;
    }
    .edc-logo {
        width: 200px;
    }
</style>

<div class="content">
    <div class="row my-3">
        <div class="col-md-4 col-sm-12 text-center">
            <div class="mb-3">
                <img
                    class="ioa-logo d-inline-block m-3"
                    src="/sponsors/logo-institute-of-aviation.svg"
                    alt="Institute of Aviation"
                />
                <img
                    class="lrn-logo d-inline-block m-3"
                    src="/sponsors/logo-lukasiewicz-research-network.svg"
                    alt="Łukasiewicz Research Network"
                />
            </div>
            <img
                class="edc-logo d-inline-block"
                src="/sponsors/logo-edc-dark.svg"
                alt="EDC — Sponsor"
            />
            <VenueName/>
        </div>

        <div class="col-md-6 col-sm-12">
            <p>Łukasiewicz Research Network – Institute of Aviation</p>

            <p>
                Engineering Design Center (EDC) was created in April 2000 under
                an agreement between General Electric Aircraft Engines and Warsaw
                Institute of Aviation (now Łukasiewicz Research Network – Institute of
                Aviation). EDC is one of several global GE establishments located outside
                the United States and cooperates with such GE businesses as GE Aviation,
                GE Power. It also carries out cooperative works with similar GE scientific
                and engineering centers located in India, Mexico, Turkey and the United States.
                The engineers working in EDC cooperate also with GE’s partners located,
                among others, in Germany, Italy, United Kingdom, Romania, South Korea
                and Taiwan.
            </p>

            <p>
                In the first stage of its activities, the engineers working in EDC were
                involved mainly in projects in the field of aviation. In 2007, the first
                group of engineers started working in projects in the field of energy
                and petroleum industry. Currently, nearly half of the engineers employed
                in EDC are related with these two areas.
            </p>

            <p>
                The engineers working in EDC are engaged in the design and improvement
                of parts of units of aircraft engines, turbine propulsion systems for
                ships and turbines for land applications (using of the so-called
                areoderivative gas engines as electricity generators), high-power gas
                turbines, steam turbines, as well as power boilers and environment
                protection equipment, such as filters and electrostatic precipitators.
            </p>

            <p>
                The engineers from EDC are also involved in design, analysis
                and servicing of such machines as compressors, turbonexpanders and gas
                turbines used in the petroleum and chemical industries. EDC also carries
                out activities related to supporting production and testing of parts
                and components.
            </p>
        </div>
    </div>
</div>
