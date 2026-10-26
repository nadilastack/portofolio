<?php

namespace Tests\Feature;

use Inertia\Testing\AssertableInertia as Assert;
use Tests\TestCase;

class AtsCvTest extends TestCase
{
    /**
     * Test that the ATS CV page renders successfully with default language.
     */
    public function test_ats_cv_page_returns_successful_response(): void
    {
        $response = $this->get('/cv');

        $response->assertStatus(200);
        $response->assertInertia(fn (Assert $page) => $page
            ->component('AtsCv')
            ->where('lang', 'id')
            ->where('autoPrint', false)
        );
    }

    /**
     * Test that the ATS CV page accepts English language parameter.
     */
    public function test_ats_cv_page_accepts_english_language_parameter(): void
    {
        $response = $this->get('/cv?lang=en');

        $response->assertStatus(200);
        $response->assertInertia(fn (Assert $page) => $page
            ->component('AtsCv')
            ->where('lang', 'en')
        );
    }

    /**
     * Test that the ATS CV page accepts print parameter.
     */
    public function test_ats_cv_page_accepts_print_parameter(): void
    {
        $response = $this->get('/cv?lang=en&print=1');

        $response->assertStatus(200);
        $response->assertInertia(fn (Assert $page) => $page
            ->component('AtsCv')
            ->where('lang', 'en')
            ->where('autoPrint', true)
        );
    }
}
