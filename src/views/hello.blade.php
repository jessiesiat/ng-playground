@extends('ng::layouts.master')

@section('content')
	<h2>Hello</h2>
	not a scope of ng <br />
	<a href="{{ URL::to('ng-playground') }}">Back to ng</a>
@stop