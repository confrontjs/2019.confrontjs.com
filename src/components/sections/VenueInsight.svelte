<script>
    import VenueName from '../shared/VenueName.svelte';
    import FullSizeImage from '../shared/FullSizeImage.svelte';
</script>

<style>
    .venue-insight-section {
        margin: 0;
    }
</style>

<section class="venue-insight-section">
    <div class="content">
        <h1>Venue</h1>

        <div class="row">
            <div class="col-md-4 col-sm-12">
                <VenueName></VenueName>
            </div>

            <div class="col-md-6 col-sm-12">
                <p><strong>Łukasiewicz Research Network – Institute of Aviation</strong></p>
                <p><strong>Engineering Design Center</strong></p>

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
