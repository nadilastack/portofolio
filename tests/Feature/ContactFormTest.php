<?php

namespace Tests\Feature;

use App\Models\ContactMessage;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ContactFormTest extends TestCase
{
    use RefreshDatabase;

    public function test_can_submit_contact_message_successfully(): void
    {
        $payload = [
            'name' => 'Recruiter PT Teknologi',
            'email' => 'recruiter@tech.com',
            'subject' => 'Undangan Wawancara Fullstack Developer',
            'message' => 'Halo Nadila, kami tertarik dengan portofolio Anda dan ingin mendiskusikan peluang karir.',
        ];

        $response = $this->post('/contact', $payload);

        $response->assertSessionHas('success');
        $this->assertDatabaseHas('contact_messages', [
            'name' => 'Recruiter PT Teknologi',
            'email' => 'recruiter@tech.com',
            'subject' => 'Undangan Wawancara Fullstack Developer',
        ]);
    }

    public function test_contact_form_validates_required_fields(): void
    {
        $response = $this->post('/contact', []);

        $response->assertSessionHasErrors(['name', 'email', 'message']);
    }
}
