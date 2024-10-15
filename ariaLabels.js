/* ARIA Acessible Rich Internet applications

Is aset of Roles and Attributes that define ways to make web content and web applications (especially those developed with JS)

more accessible to people with disssabilities.

IT suplements HTML

interactions and woidgets commonly used in applications can be passesd to assistive technologies when there is not otherwise a mechanism. For example, ARIA enables accesible JS widgets, from hints and error messages, live content updates, and more.

The first rule of ARIA use is:

If you can use a native HTML element or attribute with the semantics and behavior you required already built in, instead of re-purposing an element and adding an ARIA role, state or property to make it accesible, then sdo so.

here is a markup fora progress bar widget:*/

/* <div
    id="percent-loaded"
    role="progressbar"
    aria-valuenow="75"
    aria-valuemin="0"
    aria-valuemax="1000"
>
</div> */

/* the example div has no meaning
We included ARIA roles and properties to add meanings

the role="progressbar" attributte informs the browser that this element is actually a Javascript powered progress bar widget.

The aria-valuemin and aria valuemax attributtes species the min and maax values for the progress bar

the aria-valuenow describes the current state of it and therefore must be kept updated with Javascript

Along with placing them in the markup, 

ARIA attributes can be added to the element and updated dynamically using JS code like this:

Find the progress bar div in the DOM: */

const progressBar = document.getElementById("percent-loaded");

// Set ARIA roles and states for letting assisitive technologies know what kind of widget the div it is //

progressBar.setAttribute("role", "progressBar");
progressBar.setAttribute("aria-valuemin", 0);
progressBar.setAttribute("aria-valuemax", 100);


// Create a function that can be called at any time to update //
// the vale of the progress bar.

function updateProgress(percentComplete) {
    progressBar.setAttribute("aria-valuenow", percentComplete);
}

/*All the content that is available to non-assistive technology users must be available to assistive technologies. 

Otherwise accessibility featrues must be accesible for not assistive technologies users too */

// It would have been much simpler to use the native <progress> element instead:


