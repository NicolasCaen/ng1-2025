<?php
/**
 * Title: Infos avec pictos
 * Tags: info, picto
 * keywords: info, picto
 * Slug: ng1-2025/pattern-infos-pictos
 * Template Type: infos
 * Categories: Infos
 * Description: Colonnes avec textes et pictos
 *
 */
?>
<!-- wp:group {"metadata":{"categories":["Infos"],"patternName":"/infos-pictos","name":"Infos avec pictos"},"align":"wide","className":"grid-4-2-1 icons-descriptions__items","style":{"spacing":{"padding":{"top":"0","bottom":"0","left":"var:preset|spacing|2","right":"var:preset|spacing|2"}}},"fontSize":"m","layout":{"type":"flex","flexWrap":"nowrap","verticalAlignment":"top"}} -->
<div class="wp-block-group alignwide grid-4-2-1 icons-descriptions__items has-m-font-size" style="padding-top:0;padding-right:var(--wp--preset--spacing--2);padding-bottom:0;padding-left:var(--wp--preset--spacing--2)">
	<?php for ($i=0; $i < 5; $i++): ?>
		<!-- wp:pattern {"slug":"ng1-2025/pattern-picto-txt"} /-->
	<?php endfor; ?>
</div>
<!-- /wp:group -->