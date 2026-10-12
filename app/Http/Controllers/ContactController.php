<?php

namespace App\Http\Controllers;

use App\Models\ContactMessage;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    /**
     * Store an incoming contact form message.
     */
    public function store(Request $request): RedirectResponse
    {
        $validated = $request->validate([
            'name' => 'required|string|max:100',
            'email' => 'required|email|max:150',
            'subject' => 'nullable|string|max:200',
            'message' => 'required|string|min:5|max:3000',
        ], [
            'name.required' => 'Nama wajib diisi.',
            'email.required' => 'Email wajib diisi.',
            'email.email' => 'Format alamat email tidak valid.',
            'message.required' => 'Pesan tidak boleh kosong.',
            'message.min' => 'Pesan minimal terdiri dari 5 karakter.',
        ]);

        ContactMessage::create($validated);

        return back()->with('success', 'Terima kasih! Pesan Anda telah berhasil terkirim. Saya akan segera membalasnya.');
    }
}
