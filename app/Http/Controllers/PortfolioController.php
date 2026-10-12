<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class PortfolioController extends Controller
{
    /**
     * Display the portfolio landing page.
     */
    public function index(): Response
    {
        return Inertia::render('Portfolio', [
            'status' => session('status'),
            'success' => session('success'),
        ]);
    }
}
