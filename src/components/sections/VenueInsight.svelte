<script>
    import VenueName from '../shared/VenueName.svelte';
    import FullSizeImage from '../shared/FullSizeImage.svelte';
</script>

<style>
    .venue-insight-section {
        margin: 0;
        padding-bottom: 60px;
    }

    .venue-insight-place strong {
        display: block;
    }

    @media (min-width: 768px) {
        .venue-insight-place {
            margin-top: 0px;
        }
    }

    /* h1 {
        margin-bottom: 0;
    } */
</style>

<section class="venue-insight-section">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1>Venue</h1>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-12 col-md-6 col-lg-5">
                <VenueName/>
            </div>

            <div class="col-sm-12 col-md-6 col-lg-7">
                <p class="venue-insight-place">
                    <strong>Łukasiewicz Research Network – Institute of Aviation</strong>
                    <strong>Engineering Design Center</strong>
                </p>
                <p>
                    Institute of Aviation was founded in 1926. It is one of the oldest research
                    institutes in the country. In the years 1954–1997, the institute managed to
                    obtain 390 patents, 53 protection rights for utility models and one right to
                    register a trademark. Today as Łukasiewicz Research Network – Institute of
                    Aviation it conducts scientific, research and design works on aviation and other
                    technical fields where related problems appear.
                </p>
            </div>
        </div>
    </div>

</section>

<FullSizeImage image="/photos/72275771_416666755700619_2198959204704714752_o.png"></FullSizeImage>
